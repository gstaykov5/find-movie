const mongoose = require('mongoose');

const FavoriteMovie = new mongoose.Schema({
    favorites: [Number],
})

const Favorite = mongoose.model('FavoriteMovie', FavoriteMovie);

module.exports = Favorite;