const userService = require('../Service Layer/userService');

const getUsers = function (done) {
    userService.getUsers(done);
}

const getUserById = function (userId, done) {
    userService.getUserById(userId, done);
}

const updateUserById = function (userId, userName, done) {
    userService.updateUserById(userId, userName, done);
}

module.exports = { getUsers, getUserById, updateUserById };