import { Component} from 'react'

export default class CounterCC extends Component {

   constructor() {
      super()
      this.state = {counter : 0}
      // Make this object (parameter) available as this in the method 
      this.increment = this.increment.bind(this);
      this.resetCount = this.resetCount.bind(this);
   }
   increment() {
      this.setState( {counter : this.state.counter + 1})
   }

   resetCount()  {
      this.setState( {counter : 0})
   }

   render() {
      return (
         <>
            <h1>{this.state.counter}</h1>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.resetCount}>Reset</button>
         </>
      )
   }
}

