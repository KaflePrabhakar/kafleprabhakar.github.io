import React from "react"
import Img from "gatsby-image"

const Hobby = ({ icon, title }) => (
  <div className="single-hobby">
    <div className="hobby-icon">
      <Img fixed={icon.childImageSharp.fixed} />
    </div>
    <div className="hobby-name">
      <h4>{title}</h4>
    </div>
  </div>
)
export default Hobby
