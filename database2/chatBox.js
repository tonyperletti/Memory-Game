const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const chatBoxSchema = new mongoose.Schema({
  userName: String,
  message: String,
});

//  Creates the Mongo Collection Named 'chatboxes' ////////
const ChatBox = mongoose.model("chatboxes", chatBoxSchema);

module.exports = ChatBox;
