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
    // const users = await User.bulkCreate(userData, {
    //     individualHooks: true,
    //     returning: true,
    // });

    // for (const project of reviewData) {
    //     await Review.create({
    //         ...project,
    //         user_id: users[Math.floor(Math.rando() * users.length)].id,
    //     });
    // }

    // for(const project of commentData){
    //     await Comment.create({
    //         ...project,
    //         user_id: users[Math.floor(Math.rando() * users.length)].id,
    //     });
    // }
    process.exit(0);
};

seedDatabase();