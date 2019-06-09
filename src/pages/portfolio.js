import React from "react"

import Layout from "../components/layout"
import Border from "../components/measure"
import SEO from "../components/seo"
import { MasonryGrid, MasonryItem } from "../components/gallery"

const PortfolioPage = ({ data }) => {
  let imgData = data.allPortfolioJson.edges
  let images = data.allImageSharp.edges

  const childElements = imgData.map(function(element, key) {
    var currentImage = images.find(function(img) {
      return img.node.fluid.originalName === "portfolio_" + element.node.src
    })
    if (!currentImage) return null
    return (
      <MasonryItem attr={element} image={currentImage.node.fluid} key={key} />
    )
  })
  return (
    <Layout isCustom="">
      <SEO
        title="Portfolio"
        keywords={[
          `Prabhakar Kafle`,
          `Graphics Designer`,
          `Web Designer`,
          `Portfolio`,
          `Olympiad`,
          `HamroLagi`,
          `Oya`,
          `Oya Opportunities`,
          `Oya School`,
          `Nepal Entrepreneurs Society`,
        ]}
      />
      <section className="section portfolio-page text-center">
        <h2 className="section-header custom-bordered">
          Portfolio
          <Border stretch={true} />
        </h2>
        <div className="section-content">
          <MasonryGrid>{childElements}</MasonryGrid>
        </div>
      </section>
    </Layout>
  )
}

export default PortfolioPage

export const query = graphql`
  query {
    allPortfolioJson {
      edges {
        node {
          src
          tags
          size
          caption
          link
        }
      }
    }
    allImageSharp(
      filter: { fluid: { originalName: { regex: "/(portfolio_)/" } } }
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
