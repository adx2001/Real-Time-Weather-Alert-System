const Weather = require('../models/weatherModel');

// list all weather saved
exports.getAllWeather = async (req, res) => {
    try {
        // fetch all weather data from the db
        const weatherData = await Weather.find();
        // respond with success message and weather data
        res.json({
            success: true,
            message: "Weather data retrieved successfully",
            data: weatherData
        });
    } catch (error) {
        // pass error to global error handler
        next(error)
    }
};

