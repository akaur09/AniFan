const { User } = require("../models/user");

const user = [

];

const User = () => User.bulkCreate(user);

module.exports = User