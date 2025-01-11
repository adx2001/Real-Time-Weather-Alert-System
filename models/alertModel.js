const mongoose = require('mongoose');

const AlertSchema = new mongoose.Schema({
  city: String,
  type: String,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Alert', AlertSchema);
