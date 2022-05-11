const User = require('./user');
const Anime = require('./anime');
const Comment = require('./comment');
const Review = require('./review');

User.hasMany(Review, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Anime.hasMany(Review, {
    foreignKey: 'user_id'
});

Review.belongsTo(User, {
    foreignKey: 'user_id'
});

Review.belongsTo(Anime, {
    foreignKey: 'user_id'
});

Review.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User,{
    foreignKey: 'user_id'
});

Comment.belongsTo(Review, {
    foreignKey: 'user_id'
});

modeule.exports = {Review, Comment, User, Anime};