import React from 'react'

const Custom_Button = (props) => {
  return (
    <div 
    // className="flex justify-center"
    >
    <button className="btn btn-sm btn-wide glass btn-outline btn-accent">{props.name}</button>
  </div>
  )
}

export default Custom_Button