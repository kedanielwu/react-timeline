import React, {useState} from 'react'
import {Popover, Icon, Form, Input, Button} from 'antd'
import "./Milestone.css"

const Item = Form.Item

const MilestoneIcon = ({accepted}) => {
  if (accepted) {
    return (
      <Icon 
        className="milestone-icon" 
        type="issues-close"
        // theme="twoTone" 
        style={{color: "#52c41a"}}
      />
    )
  } else {
    return (
      <Icon 
        className="milestone-icon" 
        type="info-circle"
        theme="twoTone" 
        twoToneColor="coral"
      />
    )
  }
}

const MilestonePopover = ({data}) => (
  <div className="milestone-popover-content" >
    <Form labelCol={{ span: 7 }} wrapperCol={{ span: 15 }}>
      <Item label="reason-1">
        <Input disabled defaultValue={data.content}></Input>
      </Item>
      <Item label="reason-2">
        <Input disabled defaultValue={data.content}></Input>
      </Item>
      <Item wrapperCol={{span: 15, offset: 7}}>
        <Button 
          size="small"
          style={{marginRight: "5px"}}
          className="milestone-popover-button" 
          type="danger">
            Reject
        </Button>
        <Button 
          size="small" 
          className="milestone-popover-button" 
          type="primary">
            Accept
        </Button>
      </Item>
    </Form>
  </div>
)

const Milestone = ({data, visible, size, position, flip}) => {
  const [show, setShow] = useState(visible)
  const [noteState, setNoteState] = useState(data)

  const handleClick = (e) => {
    e.stopPropagation()
    // setNoteState({...noteState, accepted: !noteState.accepted})
  }


  return (
    <div>
      <Popover
        placement="bottom"
        trigger="click"
        title={data.title}
        content={<MilestonePopover data={noteState}/>}
      >
        <div 
          className="milestone-container" 
          style={{
            marginLeft: `${position}%`, 
            marginTop: "-22px",
            position: "absolute"
          }}
          onClick={handleClick}
        >
            <MilestoneIcon accepted={noteState.accepted}></MilestoneIcon>
        </div>
      </Popover>
    </div>
  )
}

export default Milestone