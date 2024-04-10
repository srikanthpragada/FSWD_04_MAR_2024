import React from 'react'

export default function Counter() {
  let count = 0

  function increment() {
         count ++;
         console.log(count)
  }  
  return (
     <>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
     </>
  )
}

