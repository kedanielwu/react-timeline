import React, {useState, useEffect} from 'react'
import "./Timeline.css"
import ProgressBar from "./ProgressBar"


const Timeline = () => {

  const mock = require("./mock.json")
  const mockMax = 55

  const [percentage, updatePercentage] = useState(40);

  const handleProgressBarUpdate = () => {
    console.log(percentage)
    if (percentage === 100) {
      updatePercentage(0)
    } else {
      updatePercentage(percentage + 1)
    }
  }
  useEffect(() => {
    const itr = setInterval(handleProgressBarUpdate, 1000)
    return () => clearInterval(itr)
  })

  return (
    <div style={{width: "80%"}}>
      <ProgressBar length={mockMax} node={mock} percentage={percentage}></ProgressBar>
    </div>
  )

}

export default Timeline

