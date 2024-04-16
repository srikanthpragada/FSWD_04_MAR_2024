import React, { Component } from 'react'

export default class DigitalClockCC extends Component {
  constructor() {
    super()
    this.state = { time: this.getTime() }
    this.updateClock = this.updateClock.bind(this)
  }

  componentDidMount() {
    this.timerID = setInterval(this.updateClock, 1000)
    console.log("Interval is created!")
  }
 
  componentWillUnmount() {
    clearInterval(this.timerID)
    console.log("Interval is cleared!")
  }

  getTime() {
    var ct = new Date()
    return `${ct.getHours()}:${ct.getMinutes()}:${ct.getSeconds()}`;
  }

  updateClock() {
    this.setState({ time: this.getTime() })
  }

  render() {

    return (
      <>
        <h1>{this.state.time}</h1>
      </>
    )
  }
}
