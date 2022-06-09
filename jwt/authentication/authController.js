const userService = require('../Users/userService');
const authService = require('./authService');

function registerUser(userData, done) {
    try {
        userService.findUser(userData.email, (err, userFound) => {
            if (err) {
                done(err);
            } else {
                if (userFound) {
                    done(userFound);
                } else {
                    userService.registerUser(userData, done);
                }
            }
        })
    } catch (err) {
        done(err);
    }
}

function loginUser({ email, password }, done) {
    try {
        userService.findUser(email, (err, userFound) => {
            if (err) done(err)
            else {
                const veriFfyResult = authService.verifyUser({ email, password }, userFound);

                if (veriFfyResult) {
                    const jwt = authService.generateJwt(userFound);
                    done(undefined, jwt);
                } else {
                    done({ err: "User not verify" });
                }
            }
        })
    } catch (err) {
        done(err);
    }

}

module.exports = {
    registerUser, loginUser
}