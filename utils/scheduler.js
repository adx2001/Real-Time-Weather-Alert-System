const cron = require('node-cron');
const Weather = require('../models/weatherModel');
const Alert = require('../models/alertModel');
const City = require('../models/cityModel');
const { fetchWeatherData } = require('../services/weatherService');

// function to schedule weather updates using a cron job
exports.scheduleWeatherUpdates = () => {
    // schedule a job to run every 10 minutes
    cron.schedule('*/10 * * * *', async () => {
        try {
            // fetch the list of cities from the database
            const cities = await City.find();

            // iterate through each city to fetch and process its weather data
            for (const city of cities) {
                try {
                    // fetch weather data for the current city
                    const data = await fetchWeatherData(city.name);

                    // store the fetched weather data in the Weather collection
                    await Weather.create(data);

                    // check if the weather condition includes rain and create an alert if true
                    if (data.condition.toLowerCase().includes('rain')) {
                        await Alert.create({ city: data.city, type: 'Rain' });
                        console.log(`Alert: Rain detected in ${data.city}`);
                    }

                    // check if the temperature exceeds 30 degrees and create an alert if true
                    if (data.temperature > 30) {
                        await Alert.create({ city: data.city, type: 'High Temperature' });
                        console.log(`Alert: High temperature in ${data.city}`);
                    }

                    // check if the temperature is below 10 degrees and create an alert if true
                    if (data.temperature < 10) {
                        await Alert.create({ city: data.city, type: 'Low Temperature' });
                        console.log(`Alert: Low temperature in ${data.city}`);
                    }
                } catch (err) {
                    // handle any errors encountered while processing a specific city
                    console.error(`Error fetching weather data for ${city.name}:`, err.message);
                }
            }
        } catch (err) {
            // handle errors that occur while fetching the list of cities
            console.error('Error fetching cities from the database:', err.message);
        }
    });
};

