const mongoose = require("mongoose");
// const db = require('./index.js');
mongoose.Promise = global.Promise;

const chatBoxSchema = new mongoose.Schema({
  // userName1: Boolean,
  // userName2: Boolean,
  message: String,
});

const ChatBox = mongoose.model("chatBox", chatBoxSchema);

module.exports = ChatBox;
