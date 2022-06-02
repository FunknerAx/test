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

routes.get('/:userId', (req, res) => {
    try {
        userController.getUserById(req.params.userId, (err, result) => {
            if (err)
                return res.status(400).send(err);

            return res.status(200).send({ status: "OK", data: result });
        })
    } catch (err) {
        return res.status(500).send('Something wrong in search user by id....');
    }
})

routes.post('/:userId', (req, res) => {
    try {
        userController.updateUserById(req.params.userId, req.body.userName, (err, result) => {
            if (err) return res.status(400).send(err);

            return res.status(200).send(result);
        })
    } catch (err) {
        return res.status(500).send('Something wrong with update...');
    }
})
module.exports = routes;