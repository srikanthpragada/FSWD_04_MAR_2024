import React from 'react'
import { useParams, useNavigate } from "react-router-dom";


export default function Contact() {
    let { info } = useParams();    // take route parameter 
    let navigate = useNavigate();  // get function to navigate 

    function goHome() {
        navigate("/")
    }
         
    return (
        <>
            <h1>Contact Details</h1>
            <h3>{info === 'phone' ? '9059057000' : 'contact@srikanthtechnologies.com'}</h3>
            <button onClick={goHome}>Home</button>
        </>
    )
}
