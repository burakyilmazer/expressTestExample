const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  email: String,
  name: String,
  password: String,
}, {collection: 'users'});

const users = mongoose.model('users', userSchema);

module.exports = users;
