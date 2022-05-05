const FavoriteModel = require('../models/favorite');

exports.setFavorite = movieId => FavoriteModel.create(movieId);

exports.getFavorites = () => FavoriteModel.find();

exports.updateFavorites = (collectionId, movieId, action) => {
    if(action === 'push') {
        return FavoriteModel.findByIdAndUpdate(collectionId, {$addToSet: {favorites: movieId}});
    } else {
        return FavoriteModel.findByIdAndUpdate(collectionId, {$pull: {favorites: movieId}});
    }
}