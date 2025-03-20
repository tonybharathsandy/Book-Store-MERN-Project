const express = require('express');
const { postABook, getAllBooks, getSingleBook, updateBook, deleteBook } = require('./book.controller');
const verifyAdminToken = require('../middleWare/verifyAdminToken');

const router = express.Router();

//post a book
router.post('/create-book', verifyAdminToken, postABook)

//get all books
router.get('/', getAllBooks)

//get single book endpoint
router.get('/:id', getSingleBook)

//update a book endpoint
router.put('/edit/:id',verifyAdminToken, updateBook)

//delete a book endpoint
router.delete('/:id',verifyAdminToken, deleteBook)

module.exports = router;