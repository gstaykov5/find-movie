const router = require('express').Router();

const favoriteController = require('../controllers/favoriteController');
const commentController = require('../controllers/commentController')

router.use('/favorite', favoriteController);
router.use('/comment-rating', commentController);

module.exports = router;