const mongoose = require("mongoose");
const mongoUri = "mongodb://localhost/memory_game";

const db = mongoose.connect(mongoUri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

module.exports = {
  db,
};
