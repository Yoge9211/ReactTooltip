import React from 'react'
import Tooltip from './componants/ToolTip'

export default function App() {
  return (
    <div className="App">
      <div className="example-wrapper">
        <Tooltip
          content="Hii i am Tooltip! Thanks for hovering over me"
          direction="bottom"
        >
          <span className="hoverText" role="img" aria-label="cowboy emoji">
            Hover Over me
          </span>
        </Tooltip>
      </div>
    </div>
  )
}
