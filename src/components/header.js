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
      <header
        id="site-header"
        style={{ height: window.innerWidth > 500 ? "80px" : "70px" }}
      >
        <div className="header-container">
          <div className="site-logo">
            <Link to="/">
              <Logo size={window.innerWidth > 500 ? "60px" : "50px"} />
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
