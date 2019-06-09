/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Header from "./header"
import "./layout.css"
import Footer from "./footer"

const Layout = ({ children, isCustom }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "me-bw.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <BackgroundImage
          Tag="div"
          fluid={data.placeholderImage.childImageSharp.fluid}
          backgroundColor={`#040e18`}
          id="page-body"
          style={{
            paddingTop: "80px",
            paddingBottom: "50px",
            minHeight: "100vh",
          }}
        >
          <div className="body-overlay" />
          <Header />
          <main className="main">
            <div id="content" className={isCustom}>
              {children}
            </div>
          </main>
          <Footer />
        </BackgroundImage>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
