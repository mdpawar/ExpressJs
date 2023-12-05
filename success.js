// Create a new route file named success.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('<h1>Form successfully filled!</h1>');
});

module.exports = router;
