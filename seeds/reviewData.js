const { Review } = require("../models/review");

const review =[];

const seedReviews = () => Review.bulkCreate(review);

module.exports = seedReviews