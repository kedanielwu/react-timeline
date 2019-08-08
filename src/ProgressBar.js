import React, {useState} from 'react'
import "./ProgressBar.css"


const Filler = ({ percentage }) => {
  return (
    <div className="filler" style={{width: `${percentage}%`}}></div>
  )
}

const ProgressBar = () => {
  const [percentage, updatePercentage] = useState(0);
  const handleProgressBarUpdate = () => {
    if (percentage === 100) {
      updatePercentage(0)
    } else {
      updatePercentage(percentage + 10)
    }
  }
  return (
    <div 
    className="progress_bar"
    onClick={handleProgressBarUpdate}
    >
      <Filler percentage={percentage}></Filler>
    </div>
  )
}

export default ProgressBar