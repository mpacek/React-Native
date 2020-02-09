const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const router = (require = express.Router());

router.post('/signup', (req, res) => {
  console.log(req.body);
  res.send('Hi!');
});

module.exports = router;
