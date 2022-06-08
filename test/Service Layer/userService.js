const userDAO = require('../DAO Layer/userDAO');

const getUsers = function (done) {
    userDAO.getUsers(done);
}

const getUserById = function (userId, done) {
    userDAO.getUserById(userId, done);
}

const updateUserById = function (userId, userName, done) {
    userDAO.updateUserById(userId, userName, done);
}

module.exports = { getUsers, getUserById, updateUserById };