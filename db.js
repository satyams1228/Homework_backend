const mongoose = require('mongoose');
const MONGO_URI = "mongodb+srv://satyam:satyam@cluster0.xs8enzn.mongodb.net/?retryWrites=true&w=majority" || process.env.MONGO_URI;

 
const connectDB = async () => {
    try {
      await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('MongoDB connected successfully');
    } catch (error) {
      console.error('MongoDB connection error:', error);
      process.exit(1);
    }
  };
  
  const Event = require('./model/even');
  const Alert = require('./model/alert');
  
  module.exports = { connectDB, Event, Alert };