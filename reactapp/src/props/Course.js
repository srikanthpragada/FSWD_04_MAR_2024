import React from 'react'

export default function Course(props) {
  // console.log(props)
  return (
     <>
        <h1>Title : {props.title}</h1>
        <h2>Duration : {props.duration}</h2>
        <h2>Fee : {props.fee}</h2>
     </>
  )
}


