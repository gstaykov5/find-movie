const mongoose = require('mongoose');

const FavoriteMovie = new mongoose.Schema({
    favorites: [],
})

const Favorite = mongoose.model('FavoriteMovie', FavoriteMovie);

module.exports = Favorite;