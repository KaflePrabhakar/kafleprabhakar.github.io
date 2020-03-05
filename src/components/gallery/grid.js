import React from "react"
import Masonry from "react-masonry-component"
import MasonryItem from "./item"
import Modal from "react-modal"
import Img from "gatsby-image"
import ScrollContainer from "react-indiana-drag-scroll"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"

// import { PanZoom } from "react-easy-panzoom"

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faTimes } from "@fortawesome/free-solid-svg-icons"

library.add(faTimes)

const masonryOptions = {
  transitionDuration: "1s",
  columnWidth: ".masonry-sizer",
  itemSelector: ".masonry-element",
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "80%",
    width: "80%",
    padding: "2px",
    background: "rgba(41, 54, 88, 0.9)",
    borderColor: "#888888",
    overflow: "hidden",
  },
}

const imagesLoadedOptions = { background: ".my-bg-image-el" }

var b = []

class MasonryGrid extends React.Component {
  constructor() {
    super()
    this.state = {
      tags: [],
      filter: "",
      key: -1,
      modalIsOpen: false,
      modalImg: "",
      modalZoom: 1.0,
      zooming: false,
    }

    this.openModal = this.openModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.filterTag = this.filterTag.bind(this)
  }

  openModal(src) {
    this.setState({ modalIsOpen: true, modalImg: src, modalZoom: false })
  }

  afterOpenModal() {
    // this.subtitle.style.color = "#f00"
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  onSlideZoom = value => {
    this.setState({ modalZoom: value })
  }

  filterTag = (tag, key) => {
    if (key === undefined) {
      if (this.state.tags.includes(tag)) {
        key = this.state.tags.indexOf(tag)
      } else {
        var { tags } = this.state
        tags[tags.length - 1] = tag
        key = this.state.tags.length - 1
        this.setState({
          tags: tags,
        })
      }
    }
    this.setState({
      filter: tag,
      key: key,
    })
  }

  removeFilter = e => {
    e.stopPropagation()
    this.setState({
      filter: "",
      key: -1,
    })
  }

  componentDidMount() {
    this.setState({ tags: b.slice(0, 6) })
    Modal.setAppElement("body")
  }

  render = () => {
    var { imgData, images, type } = this.props
    var allTags = []

    const childElements = imgData.map((element, key) => {
      var currentImage = images.find(function(img) {
        return img.node.fluid.originalName === type + "_" + element.node.src
      })
      var filtered =
        this.state.filter === ""
          ? 1
          : element.node.tags.includes(this.state.filter)

      allTags = allTags.concat(element.node.tags)

      if (!currentImage || !filtered) return null
      return (
        <MasonryItem
          attr={element}
          image={currentImage.node.fluid}
          key={key}
          filterTag={this.filterTag}
          onImgClick={this.openModal}
          onKeyDown={this.openModal}
        />
      )
    })

    var a = [],
      prev

    allTags.sort()
    for (var i = 0; i < allTags.length; i++) {
      if (allTags[i] === prev) {
        a[allTags[i]]++
      } else {
        a[allTags[i]] = 1
      }
      prev = allTags[i]
    }
    b = Object.keys(a).sort(function(x, y) {
      return a[y] - a[x]
    })

    var filterTags = this.state.tags.map((element, key) => {
      var active = key === this.state.key ? " active-tag" : ""
      return (
        <li className={`single-tag` + active} key={key}>
          <button onClick={() => this.filterTag(element, key)} onKeyDown={() => this.filterTag(element, key)}>
            {element}
            <span className="tag-unfilter" onClick={e => this.removeFilter(e)} onKeyDown={e => this.removeFilter(e)}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </button>
        </li>
      )
    })

    var filter = this.state.filter === "" ? "" : " filtered"
    var removeActive = this.state.key === -1 ? " active-tag" : ""
    return (
      <div className="masonry-container">
        <header className="masonry-header">
          <h3>Filter by Tags</h3>
          <div>
            <ul className="tag-list">
              <li
                className={`single-tag remove-filter` + removeActive}
                onClick={() => this.filterTag("", -1)}
                onKeyDown={() => this.filterTag("", -1)}
              >
                <button>Show All</button>
              </li>
              {filterTags}
            </ul>
          </div>
        </header>
        <Masonry
          className={"masonry-grid" + filter} // default ''
          id={"my-gallery"}
          elementType={"ul"} // default 'div'
          options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
          imagesLoadedOptions={imagesLoadedOptions} // default {}
        >
          {childElements}
          <li
            className="masonry-element cols-2 masonry-sizer"
            style={{ opacity: 0 }}
          />
        </Masonry>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modal-content">
            <div
              className={`modal-img-container${
                this.state.modalZoom > 1 ? " modal-zoomed" : ""
              }`}
            >
              {this.state.modalImg !== "" && (
                <ScrollContainer
                  className="scroll-container"
                  hideScrollbars={false}
                >
                  <Img
                    fluid={this.state.modalImg}
                    className="modal-image"
                    imgStyle={{
                      objectFit: "contain",
                      objectPosition: "50% 50%",
                    }}
                    style={{
                      height: `${(this.state.modalZoom || 1) * 100}%`,
                      width: `${(this.state.modalZoom || 1) * 100}%`,
                    }}
                  />
                </ScrollContainer>
              )}
            </div>
            <div className="modal-zoom">
              <div>
                <span onClick={() => this.onSlideZoom(1)} onKeyDown={() => this.onSlideZoom(1)}>1x</span>
                <div className="modal-slider">
                  <Slider
                    min={1}
                    max={2}
                    step={0.05}
                    value={+this.state.modalZoom}
                    railStyle={{
                      backgroundColor: "rgba(255,255,255,0.5)",
                      height: "5px",
                    }}
                    trackStyle={{ backgroundColor: "white" }}
                    handleStyle={{
                      borderColor: "#88f",
                      boxShadow: "-2px -2px 5px rgba(0,0,0,0.5)",
                    }}
                    onChange={this.onSlideZoom}
                    onBeforeChange={() => this.setState({ zooming: true })}
                    onAfterChange={() =>
                      setTimeout(() => this.setState({ zooming: false }), 1000)
                    }
                  />
                </div>
                <span onClick={() => this.onSlideZoom(2)} onKeyDown={() => this.onSlideZoom(2)}>2x</span>
              </div>
            </div>
            <div
              className="modal-zoom-label"
              style={{ display: this.state.zooming ? "block" : "none" }}
              onClick={() => this.setState({ zooming: false })}
              onKeyDown={() => this.setState({ zooming: false })}
            >
              <span>{`${Math.round(this.state.modalZoom * 100)}%`}</span>
            </div>
            <div className="modal-close" onClick={this.closeModal} onKeyDown={this.closeModal}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

export default MasonryGrid
