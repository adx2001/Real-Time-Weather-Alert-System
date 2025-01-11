const express = require('express');
const connectDB = require('./config/db')
const morgan = require('morgan');
const weatherRoutes = require('./routes/weatherRoutes')
const alertRoutes = require('./routes/alertRoutes');
const cityRoutes = require('./routes/cityRoutes')
const { scheduleWeatherUpdates } = require('./utils/scheduler')
const errorHandler=require('./middleware/errorHandler')
require('dotenv').config();

const app = express();

// database Connection
connectDB();

// middleware
app.use(express.json());    
app.use(morgan('dev'));

app.use('/weather', weatherRoutes)
app.use('/alerts', alertRoutes)
app.use('/cities', cityRoutes)


// global error handler
app.use(errorHandler)



const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    scheduleWeatherUpdates()
    console.log(`Server is running on port ${PORT}`);
});