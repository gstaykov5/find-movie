const router = require('express').Router();

const favoriteController = require('../controllers/favoriteController');

router.use('/favorite', favoriteController);

module.exports = router;