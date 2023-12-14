const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    required: true,
  },
  isDrivingSafe: {
    type: Boolean,
    required: true,
  },
  vehicleId: {
    type: Number,
    required: true,
  },
  locationType: {
    type: String,
    enum: ['highway', 'residential', 'commercial', 'city_center'],
  },
});

module.exports = mongoose.model('Event', eventSchema);
