const sequelize = require('../config/connection');
const { User, Review, Comment, Anime} = require('../models');

const userData = require('./userData');
const reviewData = require('./reviewData');
const commentData = require('./commentData');

const seedDatabase = async () => {
    await sequelize.sync ({force: true});
    
    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const project of reviewData) {
        await Review.create({
            ...project,
            user_id: users[Math.floor(Math.rando() * users.length)].id,
        });
    }

    for(const project of commentData){
        await Comment.create({
            ...project,
            user_id: users[Math.floor(Math.rando() * users.length)].id,
        });
    }
    process.exit(0);
};

seedDatabase();