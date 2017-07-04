const express = require('express');
const router = express.Router();

router.get('/register', (req, res, next) => {
  res.send('Register test');
});

router.post('/authenticate', (req, res, next) => {
  res.send('Authenticate test');
});

router.get('/profile', (req, res, next) => {
  res.send('profile test');
});

router.get('/validate', (req, res, next) => {
  res.send('validate test');
});

module.exports = router;
