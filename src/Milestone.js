import React, {useState} from 'react'
import {Popover} from 'antd'
import "./Milestone.css"

const Milestone = ({title, content, visible, size, position}) => {
  return (
    <div 
      className="milestone-container" 
      style={{marginLeft: `${position}%`, display: visible ? "block" : "none", marginTop: "-4px"}}
    >
      <Popover
        trigger="hover"
        title={title}
        content={content}
        visible={visible}
      >
        <div className="milestone-circle"></div>
      </Popover>
    </div>
  )
}

export default Milestone