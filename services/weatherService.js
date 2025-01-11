const axios = require('axios')
const { WEATHER_API_KEY } = require('../config/config')

// function to fetch weather data for a given city
exports.fetchWeatherData = async (city) => {
    // construct the API URL using the city name and API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`;

    // make a GET request to the API and destructure the response data
    const { data } = await axios.get(apiUrl);

    // return an object with relevant weather information
    return {
        city: data.name, // name of the city
        temperature: data.main.temp, // temperature in celsius
        condition: data.weather[0].main // main weather condition (eg. rain, mist, etc.)
    };
};
