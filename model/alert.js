const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    required: true,
  },
  locationType: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Alert', alertSchema);
