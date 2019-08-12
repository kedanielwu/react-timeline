import React from 'react'
import "./Timeline.css"
import ProgressBar from "./ProgressBar"
import Milestone from "./Milestone"


const Timeline = () => {

  const mock = require("./mock.json")
  const mockMax = 55

  return (
    <div style={{width: "50%", marginTop: "30%", marginLeft: "25%"}}>
      <ProgressBar length={mockMax} node={mock}></ProgressBar>
      
    </div>
  )

}

export default Timeline

