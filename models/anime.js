const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Anime extends Model {}

Anime.init(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        synopsis: {
            type: DataTypes.TEXT,
            allowNull:false
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        episode_count: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        status:{
            type: DataTypes.STRING,
            allowNull: false
        },
        age_rating:{
            type: DataTypes.STRING,
            allowNull: false
        },
        studio:{
            type: DataTypes.STRING,
            allowNull: false
        }

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'anime'
    }
)

module.exports = Anime;