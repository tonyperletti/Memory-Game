const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const playersSchema = new mongoose.Schema({
  id: Number,
  userName: String,
  imageUrl: String,
});

// Creates the Mongo Collection named "players" /////////
const Players = mongoose.model("players", playersSchema);

module.exports = Players;
