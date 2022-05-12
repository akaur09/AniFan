const router = require('express').Router();
const { User, Review, Comment, Anime } = require('../../models');
const withAuth = require('../../utils/auth');
const sequelize = require('../../config/connection');



module.exports = router;
// comments feature might be deleted