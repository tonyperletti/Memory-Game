const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const usersSchema = new mongoose.Schema({
  id: Number,
  userName: String,
  imageUrl: String,
  topTime: String
});

const User = mongoose.model('Users', usersSchema);

module.exports = User;