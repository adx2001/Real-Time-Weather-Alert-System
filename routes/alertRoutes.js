const express = require('express');
const { getAllAlerts } = require('../controllers/alertController');
const router = express.Router();

// list all alerts
router.get('/', getAllAlerts);

module.exports = router;
