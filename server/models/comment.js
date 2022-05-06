const mongoose = require('mongoose');

const CommenteMovie = new mongoose.Schema({
    comment: {
        type: String
    },
    rating: {
        type: Number
    },
    movieId: {
        type: Number
    },
})

const Comment = mongoose.model('CommenteMovie', CommenteMovie);

module.exports = Comment;