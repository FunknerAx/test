const express = require('express');
const router = express.Router();
const authController = require('./authController');

router.post('/register', (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!(name, email, password)) {
            return res.status(400).send('Required inputs are missing')
        }

        const userDetails = {
            name, email, password
        }

        authController.registerUser(userDetails, (err, result) => {
            if (err) {
                return res.status(400).send({ error: 'User alredy Exists' });
            } else {
                res.status(201).send(result);
            }
        })
    } catch (err) {
        res.status(500).send({ err: err });

    }
})

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    try {
        if (!(email && password))
            return res.status(400).send({ error: "Missing required parameters" })

        authController.loginUser({ email, password }, (err, result) => {
            if (err)
                return res.status(400).send({ error: "user not found" });

            return res.status(201).send(result);
        })

    } catch (err) {
        res.status(500).send({ err: err });
    }
})

module.exports = router;