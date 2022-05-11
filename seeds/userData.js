const { User } = require("../models/user");

const user = [

];

const seedUsers = () => User.bulkCreate(user);

module.exports = seedUsers