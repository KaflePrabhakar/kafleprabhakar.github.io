import React from "react"

class TypeWriter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      content: "",
      current: "",
      display: "",
      i: 0,
      n: 0,
      interval: 200,
      timer: "",
    }
  }
  typewriter() {
    var timer = setTimeout(() => {
      var { content, current, display, i, n, interval } = this.state
      var total = content.length
      var length = current.length

      display = current.substring(0, i)
      interval = i === length ? 2000 : 200

      if (i === length) {
        n++
        n = n < total ? n : 0
        i = -1
        //clearInterval(timer)
        //setTimeout(this.typewriter(), 2000)
      }

      this.setState({
        current: content[n],
        display: display,
        i: i + 1,
        n: n,
        interval: interval,
      })
      this.typewriter()
    }, this.state.interval)
    this.setState({ timer: timer })
  }

  componentDidMount() {
    const content = this.props.text.map(function(string) {
      return string + "."
    })
    const { n } = this.state

    this.setState({
      content: content,
      current: content[n],
      display: content[n],
      i: content[n].length,
    })
    this.typewriter()
  }
  componentWillUnmount() {
    clearTimeout(this.state.timer)
  }

  render = () => {
    return <span className="typewriter">{this.state.display}</span>
  }
}
export default TypeWriter
