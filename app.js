const express = require('express');
const bodyParser = require('body-parser');
const cron = require('node-cron');
const { connectDB } = require('./db');
const EventRoutes = require('./routes/eventRoutes');
const EventController = require('./controllers/eventController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/', EventRoutes);

connectDB();

cron.schedule('*/5 * * * *', async () => {
  try {
    const locationTypes = await LocationThreshold.distinct('location_type');

    for (const locationType of locationTypes) {
      await EventController.checkRuleViolations(locationType);
    }
  } catch (error) {
    console.error('Error in rule engine:', error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
