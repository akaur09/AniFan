const { User } = require("../models");

const user = [

];

const seedUsers = () => User.bulkCreate(user);

module.exports = seedUsers