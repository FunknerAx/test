const express = require('express');
const { Router } = require('express');
const routes = express.Router();

const userController = require('../Controller/userController');

routes.get('/', (req, res) => {
    try {
        userController.getUsers((err, results) => {
            if (err) {
                return res.status(400).send(err);
            }
            return res.status(200).send({ status: "OK", data: results });
        })
    } catch (err) {
        return res.status(500).send('Something wrong...');
    }
})

module.exports = routes;