const userDao = require('./userDao');

function findUser(userEmail, done) {
    userDao.findUser(userEmail, done);
}

function registerUser(userData, done) {
    userDao.registerUser(userData, done);
}

module.exports = {
    findUser, registerUser
}