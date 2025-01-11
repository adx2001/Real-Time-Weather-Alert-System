require('dotenv').config();

module.exports = {
    MONGO_URI: process.env.MONGO_URI,
    WEATHER_API_KEY:process.env.WEATHER_API_KEY,
};
