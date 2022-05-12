const router = require('express').Router();
const axios = require('axios').default;
const { User, Review, Comment, Anime } = require('../models');
const withAuth = require('../utils/auth');
const sequelize = require('../config/connection');

router.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://kitsu.io/api/edge/trending/anime');

        const trendingAnime = await response.data;

        const animes = trendingAnime.data;

        

        res.render('homepage', {
            animes,
            // logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

// router.get('/login', (req, res) => {
//     if (req.session.logged_in) {
//         res.redirect('/');
//         return;
//     };
    
//     res.render('login');
// });

// router.get('/signup', (req, res) => {
//     if(req.session.logged_in) {
//         res.redirect('/');
//         return;
//     };

//     res.render('signup');
// });

module.exports = router;