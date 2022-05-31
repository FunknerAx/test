const fs = require('fs');

const getUsers = function (done) {
    fs.readFile('./users.json', (err, fileContent) => {
        if (err) {
            return done("Error");
        }

        let userData = JSON.parse(fileContent);
        return done(undefined, userData);

    })
}

const getUserById = function (userId, done) {
    fs.readFile('./users.json', (err, fileContent) => {
        if (err)
            return done('Error while reading file');

        let userData = JSON.parse(fileContent);
        let user = userData.find(curUser => curUser.userId == userId);

        return done(undefined, user);
    })
}

module.exports = { getUsers, getUserById };