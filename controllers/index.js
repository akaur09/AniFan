const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const recommendationRoutes = require('./recommendationRoutes');
const singleAnimeRoutes = require('./singleAnimeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/recommendation', recommendationRoutes);
router.use('/anime', singleAnimeRoutes);

module.exports = router;

