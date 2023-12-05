const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'contact-us.html'));
});

router.post('/submit-form', (req, res, next) => {
  // Handle form submission here (save data, validate, etc.)
  // For simplicity, let's just redirect to '/success' with a success message
  res.redirect('/success');
});

  
module.exports = router;