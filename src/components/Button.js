import React from 'react'

class Button extends React.Component {
  constructor(props) {
    super(props)
    this.sendValue = this.sendValue.bind(this)
  }

  sendValue(event) {
    this.props.receiveValue(event.target.innerText)
  }
  render() {
    return (
      <button id={this.props.id} onClick={this.sendValue}>
        {this.props.value}
      </button>
    )
  }
}

export default Button
