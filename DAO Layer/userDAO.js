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

module.exports = { getUsers };