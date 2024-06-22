import React from 'react'

const Custom_Button = (props) => {
  return (
    <div 
    className="flex flex-col items-center"
    >
    <button className="btn btn-sm rounded  glass btn-outline btn-accent">{props.name}</button>
  </div>
  )
}

export default Custom_Button