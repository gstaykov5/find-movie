const router = require('express').Router();

const favoriteService = require('../services/favoriteService');

router.post('/movies', async (req, res) => {
    const movieId = req.body;

    try {
        const favorite = await favoriteService.setFavorite(movieId);

        res.status(200).json({
            favorite: favorite,
        });
    } catch (error) {
        res.json({
            type: error,
            message: error.message
        })
    }
})

router.get('/movies', (req, res) => {
    try {
        const favorites = favoriteService.getFavorites();

        res.status(200).json({
            favorites: favorites,
        });
    } catch (error) {
        res.json({
            type: error,
            message: error.message
        })
    }
})

module.exports = router;