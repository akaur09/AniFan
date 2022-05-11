const {Model, DataTypes} = require('sequelize');
const sequlize = require('../config/connection');

class Review extends Model{}

Review.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        review_text: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        user_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        anime_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'anime',
                key: 'id'
            }
        }
    },
    {
        sequlize,
        freezeTableName: true,
        underscored: true,
        modelName: 'review'
    }
)

module.exports = Review;