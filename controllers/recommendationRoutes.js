const router = require('express').Router();
const axios = require('axios').default;
const { User, Review, Comment, Anime } = require('../models');
const withAuth = require('../utils/auth');
const sequelize = require('../config/connection');

router.get('/', async (req, res) => {
    res.render('recommendation-form');
});

module.exports = router;
// Alex