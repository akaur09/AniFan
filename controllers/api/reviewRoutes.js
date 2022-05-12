const router = require('express').Router();
const { User, Review, Comment, Anime } = require('../../models');
const withAuth = require('../../utils/auth');
const sequelize = require('../../config/connection');



module.exports = router;
// single page will be linked to this
// dashbpard page will also be linked to this
// Amnider for now. Someone else might also work on this later on...