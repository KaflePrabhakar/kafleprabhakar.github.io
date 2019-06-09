import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from "../components/social"

const NotFoundPage = () => (
  <StaticQuery
    query={graphql`
      query {
        icon404: file(relativePath: { eq: "404.png" }) {
          childImageSharp {
            fixed(width: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <Layout isCustom="">
        <SEO title="404: Not found" />
        <section className="page-404">
          <Img fixed={data.icon404.childImageSharp.fixed} />
          <h1>Oops!</h1>
          <h2>Looks Like you followed a broken link!</h2>
          <p>
            Let's go to the <Link to="/">Home</Link>.
          </p>
          <h3>Or</h3>
          <Social call="page-404" />
        </section>
      </Layout>
    )}
  />
)

export default NotFoundPage
