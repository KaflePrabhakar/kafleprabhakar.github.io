import React from "react"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

const MasonryItem = ({ attr, image }) => {
  const tags = attr.node.tags.map(function(tag, key) {
    return (
      <span className="item-tag" key={key}>
        #{tag}
      </span>
    )
  })

  var link = ""
  if (attr.node.link) {
    link = (
      <a
        href={"http://" + attr.node.link}
        target="_blank"
        rel="noopener noreferrer"
        title="Opens in a New Tab"
      >
        <h6 dangerouslySetInnerHTML={{ __html: attr.node.caption }} />
        <FontAwesomeIcon icon={faExternalLinkAlt} />
      </a>
    )
  } else {
    link = <h6 dangerouslySetInnerHTML={{ __html: attr.node.caption }} />
  }

  var caption = ""
  if (attr.node.caption) {
    caption = <div className="item-caption">{link}</div>
  }

  return (
    <li className={`masonry-element ${"cols-" + attr.node.size}`}>
      <div className="masonry-item-container">
        <Img fluid={image} className="item-image" />
        <div className="item-details">
          {caption}
          <div className="item-tags">{tags}</div>
        </div>
      </div>
    </li>
  )
}

export default MasonryItem
