import React, { useEffect, useState } from 'react'
import $ from 'jquery'

export default function JQueryDemo() {
    const [now, setNow] = useState('')

    function getDateTime() {
        $.get("http://worldtimeapi.org/api/timezone/asia/kolkata",
          showDateTime
        )
    }

    function showDateTime(result) {
        setNow(result.datetime)
    }

    useEffect(getDateTime, []);

    return (
        <>
            <h2>jQuery Demo</h2>
            <h1>{now}</h1>
        </>
    )
}
