const express = require('express');
const { createCity, deleteCity } = require('../controllers/cityController');
const router = express.Router();

// add new city 
router.post('/', createCity);

// delete city
router.delete('/:id', deleteCity);

module.exports = router;
