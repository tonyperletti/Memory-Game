const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const chatBoxSchema = new mongoose.Schema({
  // userName1: Boolean,
  // userName2: Boolean,
  message: String,
});

const ChatBox = mongoose.model("ChatBox", chatBoxSchema);

module.exports = ChatBox;
