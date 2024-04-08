
import React from 'react'

export default function Now() {
  var time = new Date().toString()
  return (
      <>
       <h3 className="text-primary">{time}</h3>
      </>
  )
}
