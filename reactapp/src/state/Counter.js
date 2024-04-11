import { useState } from 'react'

export default function Counter() {
   let [count, setCount] = useState(0)

   function increment() {
      setCount(count + 1)
      console.log(count)
   }

   function resetCount() {
      setCount(0)
   }

   return (
      <>
         <h1>{count}</h1>
         <button onClick={increment}>Increment</button>
         <button onClick={resetCount}>Reset</button>
      </>
   )
}

