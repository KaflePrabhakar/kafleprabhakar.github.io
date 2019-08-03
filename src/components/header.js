import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from "./menu"
import Logo from "./logo"

const Header = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <header id="site-header" style="80px">
        <div className="header-container">
          <div className="site-logo">
            <Link to="/">
              <Logo size="60px" />
            </Link>
          </div>
          <Menu links={data.site.siteMetadata.menuLinks} />
        </div>
      </header>
    )}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
