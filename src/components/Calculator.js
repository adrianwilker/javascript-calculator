import React from 'react'
import Button from './Button'
import Display from './Display'

/* eslint no-eval: 0 */

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '0',
      output: ''
    }
    this.receiveValue = this.receiveValue.bind(this)
  }

  updateState(input, output) {
    this.setState({
      input: input,
      output: output
    })
  }

  handleOperator(operator) {
    if (this.state.input === '0') {
      this.updateState(operator, '0' + operator)
    } else if (/(\+|-|\*|\/)(-)/.test(this.state.output)) {
      this.updateState(
        operator,
        this.state.output.replace(/(\+|-|\*|\/)(-)/, operator)
      )
    } else if (/(\+|-|\*|\/)$/.test(this.state.output)) {
      this.updateState(operator, this.state.output.replace(/.$/, operator))
    } else if (this.state.output.includes('=')) {
      this.updateState(operator, this.state.input + operator)
    } else {
      this.updateState(operator, this.state.output + operator)
    }
  }

  handleNumber(number) {
    if (this.state.input === '0' || this.state.output.includes('=')) {
      this.updateState(number, number)
    } else if ('+-*/'.includes(this.state.input)) {
      this.updateState(number, this.state.output + number)
    } else {
      this.updateState(this.state.input + number, this.state.output + number)
    }
  }

  handleZero(zero) {
    if (this.state.output.includes('=')) {
      this.updateState('0', '')
    } else if ('+-*/'.includes(this.state.input)) {
      this.updateState(zero, this.state.output + zero)
    } else if (this.state.input !== '0') {
      this.updateState(this.state.input + zero, this.state.output + zero)
    }
  }

  handleEqualSign(equalSign) {
    if (/(\+|-|\*|\/)$/.test(this.state.output)) {
      this.updateState(
        eval(this.state.output.replace(/.$/, '')),
        this.state.output.replace(/.$/, '') +
          equalSign +
          eval(this.state.output.replace(/.$/, ''))
      )
    } else if (
      this.state.output.length !== 0 &&
      !this.state.output.includes(equalSign)
    ) {
      this.updateState(
        eval(this.state.output),
        this.state.output + equalSign + eval(this.state.output)
      )
    }
  }

  handleFloatingPoint(floatingPoint) {
    if (this.state.input === '0' && this.state.output.length === 0) {
      this.updateState('0' + floatingPoint, '0' + floatingPoint)
    } else if ('+-*/'.includes(this.state.input)) {
      this.updateState(
        '0' + floatingPoint,
        this.state.output + '0' + floatingPoint
      )
    } else if (this.state.output.includes('=')) {
      this.updateState(
        this.state.input + floatingPoint,
        this.state.input + floatingPoint
      )
    } else if (!this.state.input.includes('.')) {
      this.updateState(
        this.state.input + floatingPoint,
        this.state.output + floatingPoint
      )
    }
  }

  handleSubtractionOperator(operator) {
    if (this.state.output.includes('=')) {
      this.updateState(operator, this.state.input + operator)
    } else if (!/(\+|-|\*|\/)(-)/.test(this.state.output)) {
      this.updateState(operator, this.state.output + operator)
    }
  }

  receiveValue(value) {
    value = String(value)
    switch (value) {
      case 'AC':
        this.setState({
          input: '0',
          output: ''
        })
        break
      case '=':
        this.handleEqualSign(value)
        break
      case '+':
        this.handleOperator(value)
        break
      case '-':
        this.handleSubtractionOperator(value)
        break
      case '*':
        this.handleOperator(value)
        break
      case '/':
        this.handleOperator(value)
        break
      case '.':
        this.handleFloatingPoint(value)
        break
      case '0':
        this.handleZero(value)
        break
      default:
        this.handleNumber(value)
        break
    }
  }

  render() {
    return (
      <div id="calculator">
        <Display input={this.state.input} output={this.state.output} />
        <Button
          id="equals"
          value="="
          receiveValue={this.receiveValue.bind(this)}
        />
        <Button
          id="zero"
          value="0"
          receiveValue={this.receiveValue.bind(this)}
        />
        <Button
          id="one"
          value="1"
          receiveValue={this.receiveValue.bind(this)}
        />
        <Button
          id="two"
          value="2"
          receiveValue={this.receiveValue.bind(this)}
        />
        <Button
          id="three"
          value="3"
          receiveValue={this.receiveValue.bind(this)}
        />
        <Button
          id="four"
          value="4"
          receiveValue={this.receiveValue.bind(this)}
        />
        <Button
          id="five"
          value="5"
          receiveValue={this.receiveValue.bind(this)}
        />
        <Button
          id="six"
          value="6"
          receiveValue={this.receiveValue.bind(this)}
        />
        <Button
          id="seven"
          value="7"
          receiveValue={this.receiveValue.bind(this)}
        />
        <Button
          id="eight"
          value="8"
          receiveValue={this.receiveValue.bind(this)}
        />
        <Button
          id="nine"
          value="9"
          receiveValue={this.receiveValue.bind(this)}
        />
        <Button
          id="add"
          value="+"
          receiveValue={this.receiveValue.bind(this)}
        />
        <Button
          id="subtract"
          value="-"
          receiveValue={this.receiveValue.bind(this)}
        />
        <Button
          id="multiply"
          value="*"
          receiveValue={this.receiveValue.bind(this)}
        />
        <Button
          id="divide"
          value="/"
          receiveValue={this.receiveValue.bind(this)}
        />
        <Button
          id="decimal"
          value="."
          receiveValue={this.receiveValue.bind(this)}
        />
        <Button
          id="clear"
          value="AC"
          receiveValue={this.receiveValue.bind(this)}
        />
      </div>
    )
  }
}

export default Calculator
