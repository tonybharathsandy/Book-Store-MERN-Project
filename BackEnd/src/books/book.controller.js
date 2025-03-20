const Book = require('./book.model');

const postABook = async (req, res) => {
        try{
            const book = await Book({...req.body});
            await book.save();
            res.status(200).send({message : "Book Created Successfully!"});
        }catch(error){
            res.status(500).send({message : "Failed to create Book"})
        }      
}

const getAllBooks = async (req, res) => {
    try{
        const books = await Book.find().sort({createdAt : -1});
        res.status(200).send(books);
    }catch(error){
        res.status(500).send({message : "Failed to fetch Books"})
    }
}

const getSingleBook = async (req, res) => {
    try{
        const {id} = req.params
        const book = await Book.findById(id);
        if(!book){
            res.status(404).send({message : "Book not found!"})
        }
        res.status(200).send(book);
    }catch(error){
        res.status(500).send({message : "failed to fetch book"})
    }
}

const updateBook = async (req, res) => {
    try{
        const {id} = req.params
        const updatedBook = await Book.findByIdAndUpdate(id, {...req.body}, {new : true});
        if(!updatedBook){
            res.status(404).send({message : "Book not found!"})
        }
        res.status(200).send({message : "Book updated Successfully!", book : updatedBook});
    }catch(error){
        res.status(500).send({message : "failed to update book"})
    }
}

const deleteBook = async (req, res) => {
    try {
        const {id} = req.params;
        const deleteBook = await Book.findByIdAndDelete(id);
        if(!deleteBook){
            res.status(404).send({message : "Book not found!"})
        }
        res.status(200).send({message : "Book deleted successfully!", book : deleteBook});

    } catch (error) {
        res.status(500).send({message : "Failed to delete book"})
    }
}

module.exports = {
    postABook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook
}