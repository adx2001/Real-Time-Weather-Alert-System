const City = require('../models/cityModel');

//add a new city
exports.createCity = async (req, res, next) => {
    try {
        // get city name from request body
        const { name } = req.body;
        // create a new city document
        const city = await City.create({ name });
        // respond with success message and city data
        res.json({ success: true, message: "City added successfully", data: city });
    } catch (error) {
        // pass error to global error handler
        next(error)
    }
};

// delete a city
exports.deleteCity = async (req, res, next) => {
    try {
        // extract the id from request parameters
        const { id } = req.params;

        // find and delete the city by id
        const city = await City.findByIdAndDelete(id);

        // if the city is not found, return 
        if (!city) {
            return res.status(404).json({
                success: false,
                message: "City not found",
            });
        }

        // return success response with the deleted city info
        res.json({
            success: true,
            message: "City deleted successfully"
        });
    } catch (error) {
        // pass error to global error handler
        next(error);
    }
};
