const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const messagesSchema = new mongoose.Schema({
  userName: String,
  message: String,
});

//  Creates the Mongo Collection Named "messages" ////////
const Messages = mongoose.model("messages", messagesSchema);

module.exports = Messages;
