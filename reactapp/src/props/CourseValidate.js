import React from 'react'
import PropTypes from 'prop-types';

export default function CourseValidate(props) {
   return (
      <>
         <h1>Title : {props.title}</h1>
         <h2>Duration : {props.duration}</h2>
         <h2>Fee : {props.fee}</h2>
      </>
   )
}


CourseValidate.propTypes = {
   title: PropTypes.string.isRequired,
   fee: PropTypes.number.isRequired,
   duration: PropTypes.number.isRequired
};