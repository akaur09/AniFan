const router = require('express').Router();
const axios = require('axios').default;
const { User, Review, Comment, Anime } = require('../models');
const withAuth = require('../utils/auth');
const sequelize = require('../config/connection');

router.get('/', async (req, res) => {
    try {
        const response = await axios.get(`https://kitsu.io/api/edge/anime?filter[text]=naruto&page[limit]=1`);

        const singleAnime = await response.data;
        console.log(singleAnime)

        const anime = singleAnime.data[0];

        res.render('single-anime', {
            anime,
            // logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
