const Alert = require('../models/alertModel');

// list all alerts
exports.getAllAlerts = async (req, res, next) => {
    try {
        // fetch all alerts from the db
        const alerts = await Alert.find();
        // respond with success message and alert data
        res.json({
            success: true,
            message: "Alerts retrieved successfully",
            data: alerts
        });
    } catch (error) {
        // pass error to global error handler
        next(error)
    }
};


