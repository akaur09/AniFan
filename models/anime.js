const {Model, DataTypes} = require('sequlize');
const sequelize = require('../config/connection');

class Anime extends Model {}

Anime.init(
    {
        id:{
            type: DataTypes.INTEGER,
            
        }
    }
)
