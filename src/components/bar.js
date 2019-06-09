import React from "react"

const Bar = ({ title, subtitle, length }) => (
  <div className="progress-bar">
    <div className="bar-title">
      {title}
      <span className="bar-subtitle">({subtitle})</span>
    </div>
    <div className="bar-outer">
      <div className="bar-inner" style={{ width: length + "%" }} />
    </div>
  </div>
)

export default Bar
