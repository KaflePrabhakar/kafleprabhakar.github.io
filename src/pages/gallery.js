import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Border from "../components/measure"
import { MasonryGrid } from "../components/gallery"

const GalleryPage = ({ data }) => {
  let imgData = data.allGalleryJson.edges
  let images = data.allImageSharp.edges

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
          <MasonryGrid imgData={imgData} images={images} type="gallery" />
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
          fluid(maxWidth: 1400, quality: 100) {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
  }
`
