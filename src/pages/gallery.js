import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Border from "../components/measure"
import { MasonryGrid, MasonryItem } from "../components/gallery"

const GalleryPage = ({ data }) => {
  let imgData = data.allGalleryJson.edges
  let images = data.allImageSharp.edges

  const childElements = imgData.map(function(element, key) {
    var currentImage = images.find(function(img) {
      return img.node.fluid.originalName === "gallery_" + element.node.src
    })
    if (!currentImage) return null
    return (
      <MasonryItem attr={element} image={currentImage.node.fluid} key={key} />
    )
  })
  return (
    <Layout isCustom="">
      <SEO
        title="Gallery"
        keywords={[
          `Prabhakar Kafle`,
          `Graphics Designer`,
          `Web Designer`,
          `Portfolio`,
          `Olympiad`,
          `Gallery`,
          `Photos`,
        ]}
      />
      <section className="section gallery-page text-center">
        <h2 className="section-header custom-bordered">
          Gallery
          <Border stretch={true} />
        </h2>
        <div className="section-content">
          <MasonryGrid>{childElements}</MasonryGrid>
        </div>
      </section>
    </Layout>
  )
}

export default GalleryPage

export const query = graphql`
  query {
    allGalleryJson {
      edges {
        node {
          src
          tags
          size
        }
      }
    }
    allImageSharp(
      filter: { fluid: { originalName: { regex: "/(gallery_)/" } } }
    ) {
      edges {
        node {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
  }
`
