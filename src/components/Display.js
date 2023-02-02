import React from 'react'

class Display extends React.Component {
  render() {
    return (
      <div id="display-box">
        <div id="output">{this.props.output}</div>
        <div id="display">{this.props.input}</div>
      </div>
    )
  }
}

export default Display
