const userService = require('../Service Layer/userService');

const getUsers = function (done) {
    userService.getUsers(done);
}

module.exports = { getUsers };