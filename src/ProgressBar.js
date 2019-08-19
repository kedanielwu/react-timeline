import React, {useState} from 'react'
import "./ProgressBar.css"
import {Icon} from 'antd'
import Milestone from "./Milestone"


const Filler = ({ percentage }) => {
  return (
    <div>
      <div className="filler" style={{width: `${percentage}%`}}></div>
      <div className="filler-circle" style={{left: `${percentage}%`}}></div>
    </div>
  )
}



const ProgressBar = ({length, node, percentage}) => {

  const milestones = node.map((item,idx) => {
      if (item.timestamp / length * 100 < percentage) {
        return (
          <Milestone 
            key={item.timestamp} 
            data={{...item, accepted: false}}
            position={(item.timestamp / length) * 100} 
            visible={
              (item.timestamp / length) * 100 >= percentage ? false : true
            }
            flip={idx % 2 === 0 ? true : false}
          />
        )
      }
      return null
    }
  )
  
  return (
    <div 
      className="progress_bar"
    >
      {
        milestones
      }
      <Filler percentage={percentage} />
    </div>
  )
}

export default ProgressBar