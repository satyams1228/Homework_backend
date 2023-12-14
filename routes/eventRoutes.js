const express = require('express');
const eventController = require('../controllers/eventController');

const router = express.Router();

router.post('/event', eventController.postEvent);


router.get('/alert/:alert_id', eventController.getAlert);

module.exports = router;
