const router = require('express').Router();

const favoriteService = require('../services/favoriteService');

router.post('/movies', async (req, res) => {
    const movieId = req.body;

    try {
        const favorites = await favoriteService.setFavorite(movieId);

        res.status(200).json({
            favorites
        });
    } catch (error) {
        res.json({
            type: error,
            message: error.message
        })
    }
})

router.get('/movies', async (req, res) => {
    try {
        const favorites = await favoriteService.getFavorites();

        res.status(200).json({
            favorites,
        });
    } catch (error) {
        res.json({
            type: error,
            message: error.message
        })
    }
})

router.post('/movies/:collectionId', async (req, res) => {
    const collectionId = req.params.collectionId;
    const { movieId, action } = req.body;

    try {
        const favorites = await favoriteService.updateFavorites(collectionId, movieId, action);
console.log(favorites)
        res.status(200).json({
            favorites,
        });
    } catch (error) {
        res.json({
            type: error,
            message: error.message
        })
    }
})

module.exports = router;