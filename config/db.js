const mongoose = require('mongoose');
const { MONGO_URI } = require('./config')
require('dotenv').config();

// function to connect to the MongoDB database
const connectDB = async () => {
    try {
        //connect to MongoDB using the provided connection MONGO_URI
        await mongoose.connect(MONGO_URI);
        // log a message to the console if the connection is successful
        console.log('MongoDB connected');
    } catch (err) {
        // log the error message to the console if there is an issue connecting to MongoDB
        console.error(err.message);
        // exit the process with a failure code (1) to indicate an error occurred
        process.exit(1);
    }
};


module.exports = connectDB;
