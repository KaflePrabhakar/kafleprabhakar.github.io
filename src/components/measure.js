/**
 * Measure's the element's bounding box and then renders children
 */
import React from "react"
import debounce from "debounce"
import BorderSVG from "./borders"

class Border extends React.Component {
  state = {
    measurement: null,
    hasMeasured: false,
  }

  onWindowResize = debounce(() => {
    this.setState({
      measurement: this.el.getBoundingClientRect(),
    })
  }, this.props.debounce || 100)

  componentDidMount() {
    let rect = this.el.getBoundingClientRect()

    var marginX = rect.width / 10
    var marginY = rect.height / 10
    if (marginX < 10) marginX = 10
    else if (marginX > 30) marginX = 30
    if (marginY < 10) marginY = 10
    else if (marginY > 30) marginY = 30
    if (rect.width > rect.height) marginX += 5
    if (rect.width < rect.height) marginY += 5
    let m = `${-marginY + "px"} ${-marginX + "px"}`
    this.el.style.margin = m

    this.setState({
      measurement: this.el.getBoundingClientRect(),
      hasMeasured: true,
    })

    window.addEventListener("resize", this.onWindowResize)
  }

  componentWillUnmount() {
    // stop listening to window resize
    window.removeEventListener("resize", this.onWindowResize)
  }

  render() {
    let style = { zIndex: "-1" }

    if (this.props.stretch) {
      style.position = "absolute"
      style.top = 0
      style.right = 0
      style.bottom = 0
      style.left = 0
    }

    return (
      <div
        style={style}
        ref={node => {
          this.el = node
        }}
      >
        {this.state.hasMeasured && (
          <BorderSVG
            contentWidth={this.state.measurement.width}
            contentHeight={this.state.measurement.height}
          />
        )}
      </div>
    )
  }
}

export default Border
