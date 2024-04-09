
import { Component } from 'react'

export default class GreetCC extends Component {
  constructor() {
    super()
    var hours = new Date().getHours()
    this.message = "Good Evening"
    if (hours < 12)
      this.message = "Good Morning"
    else
      if (hours < 17)
        this.message = "Good Afternoon"
  }

  render() {
    return (
      <>
        <h2 className="text-danger">{this.message}</h2>
      </>
    )
  }
}
