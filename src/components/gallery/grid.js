import React from "react"
import Masonry from "react-masonry-component"

const masonryOptions = {
  transitionDuration: "1s",
  itemSelector: ".masonry-element",
}

const imagesLoadedOptions = { background: ".my-bg-image-el" }

const MasonryGrid = ({ children }) => {
  return (
    <Masonry
      className={"masonry-grid"} // default ''
      id={"my-gallery"}
      elementType={"ul"} // default 'div'
      options={masonryOptions} // default {}
      disableImagesLoaded={false} // default false
      updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
      imagesLoadedOptions={imagesLoadedOptions} // default {}
    >
      {children}
    </Masonry>
  )
}

export default MasonryGrid
