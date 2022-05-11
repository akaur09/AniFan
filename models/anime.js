const {Model, DataTypes} = require('sequlize');
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
            type: DataTypes.String,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        synopsis: {},
        genre: {},
        episode_count: {},
        status:{},
        age_rating:{},
        studio:{}
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'anime'
    }
)

module.exports = Anime;