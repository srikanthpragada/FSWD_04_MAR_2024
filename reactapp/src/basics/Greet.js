
import React from 'react'

export default function Greet() {
  var hours  = new Date().getHours()
  var message = "Good Evening"
  if (hours < 12)
      message = "Good Morning"
  else
  if (hours < 17)
       message = "Good Afternoon"

  return (
      <>
       <h2 className="text-primary">{message}</h2>
      </>
  )
}
