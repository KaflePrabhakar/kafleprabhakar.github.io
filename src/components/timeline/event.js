import React from "react"

const Event = ({ children, time, title }) => (
  <div className="event-container">
    <div className="event">
      <div className="event-time">
        <span>{time}</span>
      </div>
      <h4 className="event-title">{title}</h4>
      <div className="event-description">{children}</div>
    </div>
  </div>
)

export default Event
