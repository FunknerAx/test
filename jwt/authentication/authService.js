const jwt = require('jsonwebtoken');
const config = require('../config')

function verifyUser({ email, password }, userFound) {
    if (email === userFound.email && password === userFound.password)
        return true;
    else
        return false;
}

function generateJwt(userData) {
    const payload = {
        role: "User",
        email: userData.email,
        name: userData.name
    }
    const token = jwt.sign(payload, config.AUTH_SECRET, {
        expiresIn: 3600
    });

    return token;

}

module.exports = {
    verifyUser,
    generateJwt
}