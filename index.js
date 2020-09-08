const express = require('express');
const bodyParser = require('body-parser');
const cfg = require('./configs/config');
const mongoose = require('mongoose')
const app = express();
const userService = require('./services/user');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(cfg.db, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);

app.use((req, res, next) => {
  console.log(`${req.path} urline ${req.method} istek atılıyor...`);
  next();
});

app.use('/api/user', userService);

module.exports = app;
