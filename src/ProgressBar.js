import React, {useState} from 'react'
import "./ProgressBar.css"
import Milestone from "./Milestone"


const Filler = ({ percentage }) => {
  return (
    <div className="filler" style={{width: `${percentage}%`}}></div>
  )
}

const ProgressBar = ({length, node}) => {
  const [percentage, updatePercentage] = useState(0);
  const [data, setData] = useState(node);

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
      {
        data.map((item) => (
          <Milestone 
          key={item.timestamp} 
          title={item.title} 
          content={item.content} 
          position={(item.timestamp / length) * 100} 
          visible={(item.timestamp / length) * 100 >= percentage ? false : true}>
            
          </Milestone>
        ))
      }
    </div>
  )
}

export default ProgressBar