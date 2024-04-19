import React, { useState } from 'react'
import $ from 'jquery'
import { SERVER_URL } from './constants'
import { useNavigate } from 'react-router-dom'

export default function AddBook() {
  let [book, setBook] = useState({ title: "", author: "", price: 0 })
  let navigate = useNavigate()

  function addBook(event) {
    event.preventDefault()
    if(book.price < 0) {
      alert("Invalid Price. Please enter price >= 0")
      return;
    }

    // make ajax request for post 
    $.ajax(
      {
        url: SERVER_URL + "/books",
        method: 'post',
        data: JSON.stringify(book),   // JS to JSON
        contentType: 'application/json; charset=utf-8',
        success: function () {
          alert("Book added successfully!")
          // Clear textboxes by resetting book object 
          setBook({ title: "", author: "", price: 0 })
        },
        error: function (error) {
          console.log(error)
          alert("Sorry! Could not add book! Please try again!")
        }
      }
    )
  }

  function changeValue(event) {
    var name = event.target.name;  // name of the textbox and also property 
    var value = event.target.value;
    setBook({ ...book, [name]: value })
  }

  function cancelAdd(e) {
    e.preventDefault()
    navigate("/list")  // Programmatic Navigation

  }


  return (
    <>
      <h3>Add New Book</h3>

      <form onSubmit={addBook}>
        <div className="form-group">
          <label for="txtTitle">Title </label>
          <input className="form-control" type="text" value={book.title}
             id="txtTitle" required onChange={changeValue} name="title" />
        </div>

        <div className="form-group">
          <label for="txtAuthor">Author</label>
          <input id="txtAuthor" className="form-control" type="text" 
             value={book.author} required onChange={changeValue} name="author" />
        </div>

        <div className="form-group">
          <label for="txtPrice">Price</label>
          <input id="txtPrice" className="form-control"  type="number"
                 min="0" 
                 value={book.price} onChange={changeValue} name="price" />
        </div>
        <p></p>
        <button className="btn btn-primary">Add Book</button>
        &nbsp;
        <button className="btn btn-danger" onClick={cancelAdd}>Cancel</button>
      </form>
    </>
  )
}
