const { Comment } = require("../models");


const comment =[];

const seedComments = () => Comment.bulkCreate(comment);

module.exports = seedComments