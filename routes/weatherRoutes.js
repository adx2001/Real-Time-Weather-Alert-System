const express = require('express');
const { getAllWeather } = require('../controllers/weatherController');
const router = express.Router();

// list all weather
router.get('/', getAllWeather);

module.exports = router;
