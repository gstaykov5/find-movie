const FavoriteModel = require('../models/favorite');

exports.setFavorite = favoriteId => FavoriteModel.create(favoriteId);

exports.getFavorite = () => FavoriteModel.find();