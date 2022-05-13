const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedReviews = require('./reviewData');
const seedComments = require('./commentData');

const seedDatabase = async () => {
    await sequelize.sync ({force: true});
    await seedUsers();
    await seedReviews();
    await seedComments();
    console.log('\n----- DATABASE SEEDED -----\n');
    process.exit(0);
};

seedDatabase();