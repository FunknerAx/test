const express = require('express');
const app = express();
const config = require('./configs');
const userRoute = require('./Routes/userRoute');

const LoggerMiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next();
}

app.use(LoggerMiddleware);
app.use(express.json());

app.use('/api/v1/users', userRoute);

app.use((req, res, next) => {
    res.status(400).send('Bad request');
})

app.listen(config.PORT, () => {
    console.log(`Server start at ${config.PORT}`)
})