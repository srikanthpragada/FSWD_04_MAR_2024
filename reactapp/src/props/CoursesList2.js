import React from 'react'

function CourseDetails({ course }) {
   //console.log(course)
   return (
      <tr>
         <td className="text-center">{course.title}</td>
         <td className="text-center">{course.duration}</td>
         <td className="text-center">{course.fee}</td>
      </tr>
   )
}

export default function CoursesList2() {
   let courses = [
      { title: 'Data Science', duration: 36, fee: 7500 },
      { title: 'Python', duration: 36, fee: 6000 },
      { title: 'AWS Cloud Practitioner', duration: 24, fee: 4500 }
   ]

   return (
      <>
         <h1>Courses</h1>
         <table className="table table-bordered">
            <thead>
               <tr>
                  <th className="text-center">Title</th>
                  <th className="text-center">Duration (Hours)</th>
                  <th className="text-center">Fee (INR)</th>
               </tr>
            </thead>
            <tbody>
               {
                  courses.map(c =>
                     <CourseDetails  key={c.title} course={c} />
                  )
               }
            </tbody>
         </table>
      </>
   )
}


