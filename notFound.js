const express = require('express');

const routes = express.Router();

routes.use((req, res, next) => {
    res.status(404).send('Page Not Found');
})

module.exports = routes;