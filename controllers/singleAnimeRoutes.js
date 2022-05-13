const router = require('express').Router();
const axios = require('axios').default;
const { User, Review, Comment, Anime } = require('../models');
const withAuth = require('../utils/auth');
const sequelize = require('../config/connection');

router.get('/', async (req, res) => {
    try {
        const response = await axios.get(`https://kitsu.io/api/edge/anime?filter[text]=naruto&page`);

        const singleAnime = await response.data;

        const anime = await singleAnime.data[0].attributes;
        console.log(anime)

        res.render('single-anime', {
            anime,
            // logged_in: req.session.logged_in
        });
        // res.json(anime.synopsis)

    } catch (err) {
        res.status(500).json(err);
    }
});

// router.get('/', async (req, res) => {
//     try {
//         const response = await axios.get('https://kitsu.io/api/edge/trending/anime');

//         const trendingAnime = await response.data;

//         const animes = trendingAnime.data;

//         // res.render('single-anime', {
//         //     animes,
//         //     // logged_in: req.session.logged_in
//         // });
//         res.json(animes[0])

//     } catch (err) {
//         res.status(500).json(err);
//     }
// })

module.exports = router;
