# Real-Time Weather Alert System

## Overview
Real-Time Weather Alert System built using Node.js, Express.js, and MongoDB. It periodically fetches weather data for specified cities, stores the data, and generates alerts based on predefined conditions (e.g., rain, high temperature, or low temperature). The system uses `node-cron` to schedule periodic tasks that fetch weather data every 10 minutes automatically.

---

## Features
- Add or remove cities to monitor.
- Fetch weather data periodically (every 10 minutes).
- Store weather data in a MongoDB database.
- Generate alerts for specific weather conditions:
  - Rain
  - High temperature (>30°C)
  - Low temperature (<10°C)
- RESTful APIs to manage cities, weather data, and alerts.

---

## Technologies Used
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Scheduler**: node-cron
- **HTTP Client**: Axios

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/adx2001/Real-Time-Weather-Alert-System.git
   cd Real-Time-Weather-Alert-System
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the `.env` file with the following variables:
   ```env
   MONGO_URI=your_mongo_connection_string
   WEATHER_API_KEY=your_openweathermap_api_key
   PORT=5000
   ```

4. Start the application:
   ```bash
   npm start
   ```

---

## Project Structure
```
real-time-weather-alert-system/
├── config/
│   ├── config.js
│   └── db.js
├── controllers/
│   ├── alertController.js
│   ├── cityController.js
│   └── weatherController.js
├── middleware/
│   └── errorHandler.js
├── models/
│   ├── alertModel.js
│   ├── cityModel.js
│   └── weatherModel.js
├── routes/
│   ├── alertRoutes.js
│   ├── cityRoutes.js
│   └── weatherRoutes.js
├── services/
│   └── weatherService.js
├── utils/
│   └── scheduler.js
├── .env
├── package.json
├── package-lock.json
├── app.js
└── README.md
```

---

## Endpoints

### Cities
- **Add a city**: `POST /cities`
  - Request body: `{ "name": "CityName" }`
- **Remove a city**: `DELETE /cities/:id`

### Weather
- **Get all weather data**: `GET /weather`

### Alerts
- **Get all alerts**: `GET /alerts`

---

## How It Works

1. **City Management**:
   - Add cities to monitor via the `/cities` endpoint.

2. **Weather Data Fetching**:
   - Every 10 minutes, the system fetches weather data for all monitored cities using the OpenWeatherMap API. This is achieved using `node-cron`, which schedules the data fetching task to run at regular intervals.

3. **Alerts**:
   - Alerts are automatically generated and stored in the database if certain conditions are met (e.g., rain or extreme temperatures).

4. **APIs**:
   - Access weather data and alerts via RESTful endpoints.

---

## Dependencies
- `express`: Web framework
- `mongoose`: MongoDB ORM
- `axios`: HTTP client for API calls
- `node-cron`: Task scheduler
- `dotenv`: Manage environment variables

---

## Notes
- Ensure you have a valid API key from [OpenWeatherMap](https://openweathermap.org/api).
- Use a MongoDB connection string in the `.env` file for database access.

---
