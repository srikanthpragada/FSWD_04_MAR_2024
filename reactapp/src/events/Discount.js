import React from 'react'

export default function Discount() {

    function showDiscount(event) {
        console.log(event)
        let price = document.getElementById("txtPrice").value;
        let discount;

        if (price < 10000)
            discount = price * 10 / 100
        else
            discount = price * 20 / 100

        alert(discount)

    }
    return (
        <>
            <h1>Discount Calculation</h1>
            Price <br />
            <input type="number" id="txtPrice" />
            <p></p>
            <button onClick={showDiscount}>Show Discount</button>
        </>
    )
}
