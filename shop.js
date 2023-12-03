const express = require('express');

const routes = express.Router();

routes.get('/',(req, res, next) => {
    console.log(' I am another middleware');
    res.send('<h1>Hello Express Js</h1>')
})

routes.use((req, res, next) => {
    res.status(404).render('404');
  });

module.exports = routes;
