const mongoose = require('mongoose');

const locationThresholdSchema = new mongoose.Schema({
  location_type: {
    type: String,
    unique: true,
    required: true,
  },
  threshold: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('LocationThreshold', locationThresholdSchema);
