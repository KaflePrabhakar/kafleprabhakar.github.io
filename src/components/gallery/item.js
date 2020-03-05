import React from "react"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

class MasonryItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: "",
      display: "list-item",
    }
  }
  render = () => {
    const { attr, image, filterTag, onImgClick } = this.props

    const tags = attr.node.tags.map((tag, key) => {
      return (
        <span className="item-tag" key={key} onClick={() => filterTag(tag)} onKeyDown={() => filterTag(tag)}>
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
      <li
        className={`masonry-element ${"cols-" + attr.node.size}`}
        style={{ display: this.state.display }}
      >
        <div className="masonry-item-container">
          <span onClick={() => onImgClick(image)} onKeyDown={() => onImgClick(image)}>
            <Img fluid={image} className="item-image" />
          </span>
          <div className="item-details">
            {caption}
            <div className="item-tags">{tags}</div>
          </div>
        </div>
      </li>
    )
  }
}

export default MasonryItem
