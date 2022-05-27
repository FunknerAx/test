const userDAO = require('../DAO Layer/userDAO');

const getUsers = function (done) {
    userDAO.getUsers(done);
}

module.exports = { getUsers };