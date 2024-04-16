import React, { useEffect, useState } from 'react'

export default function FetchDemoAsync() {
    const [now, setNow] = useState('')

    async function getTime() {
       var resp = await fetch("http://worldtimeapi.org/api/timezone/asia/kolkata")
       var dateObj = await resp.json() 
       setNow(dateObj.datetime)
    }

    function getDateTime() {
         getTime() 
    }


    useEffect(getDateTime, []);

    return (
        <>
            <h2>Fetch Demo</h2>
            <h1>{now}</h1>
        </>
    )
}
