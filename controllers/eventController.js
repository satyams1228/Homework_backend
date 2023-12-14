const Event = require('../model/even');
const Alert = require('../model/alert');

class EventController {
  async postEvent(req, res) {
    try {
      const { timestamp, is_driving_safe, vehicle_id, location_type } = req.body;
      const event = await Event.create({ timestamp, is_driving_safe, vehicle_id, location_type });
      res.status(201).json({ message: 'Event received and stored successfully.', event });
    } catch (error) {
      console.error('Error processing event:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async getAlert(req, res) {
    try {
      const { alert_id } = req.params;
      const alert = await Alert.findById(alert_id);
      if (!alert) {
        return res.status(404).json({ error: 'Alert not found' });
      }
      res.json({ alert });
    } catch (error) {
      console.error('Error fetching alert:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

module.exports = new EventController();
