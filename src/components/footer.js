import React from "react"
import { Link } from "gatsby"
import Logo from "./logo"

const Menu = () => (
  <footer className="site-footer">
    <div className="site-logo">
      <Link to="/">
        <Logo size="30px" />
      </Link>
    </div>
    <div className="footer-text">
      <span>© {new Date().getFullYear()} - Prabhakar Kafle .</span>{" "}
      <span>
        Built with{" "}
        <a
          href="https://www.gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>
      </span>
    </div>
  </footer>
)

export default Menu
