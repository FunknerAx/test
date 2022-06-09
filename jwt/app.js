const express = require('express');
const app = express();
const config = require('./config');
const authRouter = require('./authentication');
const dateFormat = require('date-format');
const morgan = require('morgan');

app.use(express.json());

app.use(morgan());

app.use('/auth', authRouter);

app.listen(config.PORT, () => {
    console.log(`Server started at ${config.PORT}`);
})