const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    bookId: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    authors: {
        type: Array,
        default: ''
    },
    picture: {
        type: String,
        unique: true
    },
});

const book = new mongoose.model('Book', schema);

module.exports = book;