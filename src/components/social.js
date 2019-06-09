import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faInstagram,
  faFacebookSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

library.add(
  faFacebookSquare,
  faTwitterSquare,
  faLinkedin,
  faInstagram,
  faEnvelope
)

const Social = ({ call }) => (
  <StaticQuery
    query={graphql`
      query SocialMediaQuery {
        site {
          siteMetadata {
            social {
              name
              link
            }
          }
        }
      }
    `}
    render={data => {
      const medias = data.site.siteMetadata.social.map(function(media, key) {
        var icon
        switch (media.name) {
          case "Facebook":
            icon = faFacebookSquare
            break
          case "Twitter":
            icon = faTwitterSquare
            break
          case "Instagram":
            icon = faInstagram
            break
          case "LinkedIn":
            icon = faLinkedin
            break
          case "Email":
            icon = faEnvelope
            break
          default:
            icon = ""
        }
        return (
          <li className="single-social-link" key={key} id={call}>
            <a
              href={media.link}
              target="_blank"
              rel="noopener noreferrer"
              title={media.name}
            >
              <FontAwesomeIcon icon={icon} />
            </a>
          </li>
        )
      })
      return (
        <section className="social-media">
          <div className="social-media-container">
            <div className="social-heading">
              <h3 className="section-heading">Let's Connect</h3>
            </div>
            <div className="section-content">
              <ul className="social-media-list">{medias}</ul>
            </div>
          </div>
        </section>
      )
    }}
  />
)

export default Social
