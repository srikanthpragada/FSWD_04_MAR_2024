import react from 'react'

export default class CourseCC extends react.Component {

   constructor(props) {
      super()
      console.log(props)
      this.course = props 
      // this.title = props.title 
      // this.fee = props.fee 
   }

   render() {

      return (
         <>
            <h1>Title : {this.course.title} </h1>
            <h2>Duration : {this.course.duration}</h2>
            <h2>Fee : {this.course.fee}</h2>
         </>
      )
   }
}


