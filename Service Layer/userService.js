const userDAO = require('../DAO Layer/userDAO');

const getUsers = function (done) {
    userDAO.getUsers(done);
}

const getUserById = function (userId, done) {
    userDAO.getUserById(userId, done);
}

module.exports = { getUsers, getUserById };