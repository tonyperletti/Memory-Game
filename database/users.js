const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const usersSchema = new mongoose.Schema({
  imageUrl: String,
  userName: String,
  userAge: Number,
  topTimes: String
})

const User = mongoose.model('Users', usersSchema);

module.exports = User;