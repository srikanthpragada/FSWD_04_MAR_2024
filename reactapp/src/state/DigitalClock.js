import React, { useEffect, useState } from 'react'

export default function DigitalClock() {
  var [time, setTime]   = useState(getTime());

  useEffect(
     // setup function 
     () => {
       var id = setInterval(updateClock, 1000)
       console.log("Interval is created!") 
       // clean-up function 
       return () => {
         clearInterval(id)
         console.log("Cleared Interval")
       }
     },
     []  // depedency list 
  )

  function getTime() {
    var ct = new Date()
    return `${ct.getHours()}:${ct.getMinutes()}:${ct.getSeconds()}`;
  }

  function updateClock() {
     setTime(getTime())
  }
  

  return (
    <>
       <h1>{time}</h1>
    </>
  )
}
