import React, { useState, useEffect } from 'react'
import $ from 'jquery'
import { useParams } from "react-router-dom";
import { SERVER_URL } from './constants';
import { useNavigate } from 'react-router-dom'

export default function EditBook() {
    let { bookId } = useParams();
    const [book, setBook] = useState({ title : "", author : "", price : ""})
    let navigate = useNavigate()

    useEffect(() => {
        $.get(`${SERVER_URL}/books/${bookId}`,
            (book) => {
                setBook(book)
            }
        ) // get
    }, [bookId])


    function changeValue(event) {
        var name = event.target.name;
        var value = event.target.value;
        setBook({ ...book, [name]: value })
    }

    function cancelUpdate(e) {
        e.preventDefault()
        navigate("/list")  // Programmatic Navigation
    }

    function updateBook(event) {
        event.preventDefault()

        // make ajax request for post 
        $.ajax(
            {
                url:`${SERVER_URL}/books/${bookId}`,
                method: 'put',
                data: JSON.stringify(book),   // JS to JSON
                contentType: 'application/json; charset=utf-8',
                success: function () {
                    alert("Book updated successfully!")
                },
                error: function (error) {
                    console.log(error)
                    alert("Sorry! Could not update book! Please try again!")
                }
            }
        )
    }


    return (
        <>
            <h2>Edit Book</h2>
            <form onSubmit={updateBook}>
                Title <br />
                <input type="text" value={book.title} required onChange={changeValue} name="title" />
                <p></p>

                Author <br />
                <input type="text" value={book.author} required onChange={changeValue} name="author" />
                <p></p>

                Price <br />
                <input type="number" min="0" value={book.price} onChange={changeValue} name="price" />
                <p></p>
                <button>Update Book</button>
                &nbsp;
                <button onClick={cancelUpdate}>Cancel</button>
            </form>
        </>
    )
}
