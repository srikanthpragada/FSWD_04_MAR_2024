var express = require('express');
var db = require("./booksDatabase")

async function getBooks(req,res) {
  try {
    let books = await db.getBooks()
    res.json(books)
  }
  catch (err) {
    res.status(500).send("Error : " + err.message)
  }
}

async function getBooksByAuthor(req, res) {
  try {
    let books = await db.getBooksByAuthor(req.query.author)
    res.json(books)
  }
  catch (err) {
    res.status(500).send("Error : " + err.message)
  }
}

async function getBookById(req,res) {
  try {
    let book = await db.getBookById(req.params.id)
    if (book)
      res.json(book)
    else
      res.status(404).send("Book Id Not Found!")
  }
  catch (err) {
    res.status(500).send("Error : " + err.message)
  }
}

async function searchBooks(req, res) {
  try {
    let books = await db.searchBooks(req.query.title)
    //console.log(books)
    res.json(books);
  }
  catch (err) {
    res.status(500).send("Error : " + err.message)
  }
}


async function addBook(req, res) {
  try {
    if(req.body.title && req.body.author && req.body.price) {
       await db.addBook(req.body.title, req.body.author, req.body.price)
       res.status(201).send("Book Added!")
    }
    else
       res.status(400).send("Invalid Data!")
  }
  catch (err) {
    res.status(500).send("Error : " + err.message)
  }
}

async function updateBook(req, res) {
  try {
    if(req.body.title && req.body.author && req.body.price) {
        updated = await db.updateBook(req.params.id, req.body)
        if (updated)
          res.status(200).send("Book Updated!")
        else
          res.status(404).send("Book Id Not Found!")
    }
    else
       res.status(400).send("Invalid Data!")
  }
  catch (err) {
    res.status(500).send("Error : " + err.message)
  }
}

async function deleteBook(req, res) {
  try {
    let deleted = await db.deleteBook(req.params.id)
    if(deleted)
      res.status(204).send("Book Deleted!")
    else
      res.status(404).send("Book Id Not Found!")
  }
  catch (err) {
    res.status(500).send("Error : " + err.message)
  }
}

async function getAuthorsBooksCount(req, res) {
  try {
    let authors = await db.getAuthorsBooksCount()
    res.json(authors)
  }
  catch (err) {
    res.status(500).send("Error : " + err.message)
  }
}


module.exports = {
  getBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
  searchBooks,
  getAuthorsBooksCount,
  getBooksByAuthor
}
 
