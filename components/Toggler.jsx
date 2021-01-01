import React from 'react'

const Toggler = ({ toggled, ...props }) => {
  return (
    <div {...props} className={`burger ${toggled ? 'toggled' : ''}`}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Toggler
