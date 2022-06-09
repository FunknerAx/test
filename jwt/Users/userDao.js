const users = require('./users.json');
const fs = require('fs');

function findUser(userEmail, done) {
    const fetchedUser = users.find(cur => cur.email == userEmail)
    done(undefined, fetchedUser);
}

function registerUser(userData, done) {
    users.push(userData);

    fs.writeFileSync('./Users/users.json', JSON.stringify(users))
    done(undefined, userData)
}

module.exports = {
    registerUser,
    findUser
}