const router = require('express').Router();

const userRoutes = require('./userRoutes');
const reviewRoutes = require('./reviewRoutes');
const commentRoutes = require('./commentRoutes');
const animeRoutes = require('./animeRoutes');

router.use('/users', userRoutes);
router.use('/posts', reviewRoutes);
router.use('/comments', commentRoutes);
router.use('/animes', animeRoutes);

module.exports = router;