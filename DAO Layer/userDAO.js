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

const updateUserById = function (userId, userName, done) {
    fs.readFile('./users.json', (err, fileContent) => {
        if (err) return done(err);

        let userData = JSON.parse(fileContent);
        let userIndex = userData.findIndex(cur => cur.userId == userId);

        if (userIndex == -1) return done(`User with id = ${userId} didn\`t find`);
        userData[userIndex].userName = userName;

        fs.writeFile('./users.json', JSON.stringify(userData), (err, updated) => {
            if (err) return done(err);

            return done(undefined, "Success updated");

        })
    })
}

module.exports = { getUsers, getUserById, updateUserById };