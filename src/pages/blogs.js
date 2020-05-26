import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Border from "../components/measure"
// import { MasonryGrid } from "../components/gallery"

const BlogsList = ({ data }) => {
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
          {data.allMarkdownRemark.edges.map(({ i, node }) => (
            <div key={i}>
              <h3>{node.frontmatter.title}</h3>
            </div>
          ))}
      </section>
    </Layout>
  )
}

export default BlogsList

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
        }
      }
    }
  }
`
