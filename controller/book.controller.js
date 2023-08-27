const BookModel = require('../model/book.model')

exports.create = async (req, res) => {
    if (!req.body.bookId && !req.body.title && !req.body.authors ) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    
    const book = new BookModel({
        bookId: req.body.bookId,
        title: req.body.title,
        authors: req.body.authors,
        picture: req.body.pic
    });
    
    await book.save().then(data => {
        res.send({
            message:"Book created successfully!!",
            user:data
        });
    }).catch(err => {
        console.log(err)
        res.status(500).send({
            message: err.message || "Some error occurred while saving book"
        });
    });
};

exports.findAll = async (req, res) => {
    try {
        const book = await BookModel.find();
        res.status(200).json(book);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

exports.destroy = async (req, res) => {
    await BookModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
          res.status(404).send({
            message: `Book not found.`
          });
        } else {
          res.send({
            message: "Book deleted successfully!"
          });
        }
    }).catch(err => {
        res.status(500).send({
          message: err.message
        });
    });
};