const { Comment } = require("../models/comment");


const comment =[];

const seedComments = () => Comment.bulkCreate(comment);

module.exports = seedComments