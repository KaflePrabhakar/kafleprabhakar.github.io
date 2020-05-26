import React from "react"
import { graphql } from "gatsby"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../style/blog.css"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGetPocket,
  faFacebook,
  faTwitter,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons"

library.add(faFacebook, faTwitter, faGetPocket)

var sharePost = function(e) {
  const media = Array.from(e.target.classList)
  if (media.includes("facebook")) {
    window.open(
      "https://www.facebook.com/sharer/sharer.php?u=" +
        encodeURI(window.location.href),
      "pop",
      "width=600, height=400, scrollbars=no"
    )
  } else if (media.includes("twitter")) {
    window.open(
      "https://www.twitter.com/share?url=" + encodeURI(window.location.href),
      "pop",
      "width=600, height=400, scrollbars=no"
    )
  } else if (media.includes("pocket")) {
    window.open(
      "https://getpocket.com/save?url=" + encodeURI(window.location.href),
      "pop",
      "width=600, height=400, scrollbars=no"
    )
  }
}

export default ({ location, data }) => {
  const post = data.markdownRemark
  let disqusConfig = {
    url: `${data.site.siteMetadata.siteUrl + location.pathname}`,
    identifier: location.pathname,
    title: post.frontmatter.title,
  }
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  let newDate = new Date(post.parent.modifiedTime)
  const updated =
    newDate.getDate() +
    " " +
    monthNames[newDate.getMonth()] +
    " " +
    newDate.getFullYear()
  return (
    <Layout>
      <SEO
        title="Nepal Physics Olympiad"
        description={post.frontmatter.description}
      />
      <div>
        <header className="post-header">
          <div className="container">
            <h1 className="post-title">{post.frontmatter.title}</h1>
            <div className="post-metadata">
              <div className="post-author">{post.frontmatter.author}</div>
              <div className="post-lastUpdate">
                <span>Last updated: </span>
                {updated}
              </div>
            </div>
          </div>
        </header>
        <svg
          version="1.1"
          id="curve"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100%"
          height="100%"
          viewBox="0 0 959 49.5"
        >
          <path d="M959,50H0V0.5c0,0,195.66,38.091,479.887,38.091S959,0.5,959,0.5V50z" />
        </svg>
        <div className="post-body">
          <div className="container">
            <div className="row">
              <div className="post-sideBar">
                <div className="post-sideMeta">
                  <div className="post-sideTitle">{post.frontmatter.title}</div>
                  <div className="social-share">
                    SHARE
                    <div
                      className="social facebook"
                      onClick={e => sharePost(e)}
                    >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </div>
                    <div className="social twitter" onClick={e => sharePost(e)}>
                      <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <div className="social pocket" onClick={e => sharePost(e)}>
                      <FontAwesomeIcon icon={faGetPocket} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="post-content">
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
                <div className="post-comments">
                  <CommentCount config={disqusConfig} placeholder={"..."} />
                  <Disqus config={disqusConfig} />
                </div>
              </div>
              <div className="right-blank" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        description
      }
      parent {
        ... on File {
          modifiedTime(formatString: "MM/DD/YYYY")
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
