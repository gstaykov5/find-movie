const router = require('express').Router();

const commentsService = require('../services/commentService');

router.post('/details', async (req, res) => {
    const data = req.body;

    try {
        await commentsService.setComments(data);

        res.status(200)
    } catch (error) {
        res.json({
            type: error,
            message: error.message
        })
    }
})

router.get('/details/:movieId', async (req, res) => {
    const movieId = Number(req.params.movieId);

    try {
        const movieCommentAndRating = await commentsService.getComments(movieId);

        res.status(200).json({
            movieCommentAndRating
        })
    } catch (error) {
        res.json({
            type: error,
            message: error.message
        })
    }
})

module.exports = router;