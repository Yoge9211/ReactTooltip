import React, { useState } from 'react'
import './tooltip.css'

const Tooltip = (props) => {
  const [active, setActive] = useState(false)
  const { content, direction } = props

  const showTip = () => {
    setActive(true)
  }

  const hideTip = () => {
    setActive(false)
  }

  return (
    <div
      className="Tooltip-Wrapper"
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {/* Wrapping */}
      {props.children}
      {active && (
        <div className={`Tooltip-Tip ${direction || 'top'}`}>{content}</div>
      )}
    </div>
  )
}

export default Tooltip
