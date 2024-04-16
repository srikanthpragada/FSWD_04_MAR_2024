import React, { useEffect, useState } from 'react'

export default function FetchDemo() {
    const [now, setNow] = useState('')

    function getDateTime() {
        fetch("http://worldtimeapi.org/api/timezone/asia/kolkata")
            .then(response => response.json())  // JSON to JS
            .then(data => setNow(data.datetime))
    }


    useEffect(getDateTime, []);

    return (
        <>
            <h2>Fetch Demo</h2>
            <h1>{now}</h1>
        </>
    )
}
