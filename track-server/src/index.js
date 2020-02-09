const express = require('express');
const mongoose = require('mongoose');
const keys = require('../config/dev');

const app = express();

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
});
mongoose.connection.on('connected', () => {
  console.log('Conected to mongo instance');
});
mongoose.connection.on('error', err => {
  console.error('Error connecting to mongo', err);
});

app.get('/', (req, res) => {
  res.send('Hi');
});

app.listen(3000, () => {
  console.log('Listenin on port 3000');
});
