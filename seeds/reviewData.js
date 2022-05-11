const { Review } = require("../models");

const review =[];

const seedReviews = () => Review.bulkCreate(review);

module.exports = seedReviews