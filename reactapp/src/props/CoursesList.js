import React from 'react'


export default function CoursesList() {
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
                  <th>Title</th>
                  <th>Duration (Hours)</th>
                  <th>Fee (INR)</th>
               </tr>
            </thead>
            <tbody>
               {
                  courses.map(c =>
                     <tr>
                        <td>{c.title}</td>
                        <td>{c.duration}</td>
                        <td>{c.fee}</td>
                     </tr>
                  )
               }
            </tbody>
         </table>
      </>
   )
}


