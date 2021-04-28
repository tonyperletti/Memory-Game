const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const playersSchema = new mongoose.Schema({
  id: Number,
  userName1: String,
  userName2: String,
  imageUrl: String,
});

const Players = mongoose.model("Players", playersSchema);

module.exports = Players;