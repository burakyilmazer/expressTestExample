const express = require('express');
const userModel = require('../models/user');

const app = express.Router();

app.post('/', async (req, res) => {
  userModel.create(req.body, (err, createResult) => {
    if (err) {
      return res.json({
        type: false,
        message: err.toString()
      });
    }
    return res.json({
      type: true,
      message: 'Kullanıcı Oluşturuldu'
    })
  });
});

module.exports = app;
