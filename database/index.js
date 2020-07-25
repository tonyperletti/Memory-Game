const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/users';

const db = mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true } );

module.exports = db;