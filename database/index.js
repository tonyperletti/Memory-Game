const mongoose = require("mongoose");

// Creates the Mongo Database named "memory_game" //
const mongoUri = "mongodb://localhost/memory_game";

const db = mongoose.connect(mongoUri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

module.exports = {
  db,
};
