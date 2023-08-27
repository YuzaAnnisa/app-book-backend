const express = require('express')

const BookController = require('../controller/book.controller')
const BookRouter = express.Router();

BookRouter.get('/', BookController.findAll);
BookRouter.post('/create', BookController.create);
BookRouter.delete('/:id', BookController.destroy);

module.exports = BookRouter