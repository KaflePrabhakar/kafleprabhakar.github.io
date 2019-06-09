import React from "react"
import { Link } from "gatsby"

class Menu extends React.Component {
  constructor() {
    super()

    this.state = {
      displayMenu: false,
      isMobile: false,
    }

    this.showDropdownMenu = this.showDropdownMenu.bind(this)
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this)
    this.onWindowResize = this.onWindowResize.bind(this)
  }

  showDropdownMenu(event) {
    event.preventDefault()
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu)
    })
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu)
    })
  }

  onWindowResize = () => {
    this.setState({
      isMobile: window.innerWidth < 700 ? true : false,
    })
  }

  componentDidMount() {
    this.setState({
      isMobile: window.innerWidth < 700 ? true : false,
    })
    window.addEventListener("resize", this.onWindowResize)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onWindowResize)
  }

  render() {
    return (
      <nav
        className={`menu-container ${
          this.state.displayMenu ? "navbar-expand" : ""
        } ${this.state.isMobile ? "navbar-mobile" : ""}`}
      >
        <ul className="site-menu">
          {this.props.links.map(link => (
            <li key={link.name} className="menu-item">
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div
          className={`nav-dropdown ${this.state.displayMenu ? "open" : ""}`}
          onClick={this.showDropdownMenu}
        >
          <span className="menu-hamburger" />
        </div>
      </nav>
    )
  }
}

export default Menu
