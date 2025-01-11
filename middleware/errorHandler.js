const errorHandler = (err, req, res, next) => {
    console.error("Error Middleware: ", err);

    // mongoDB duplicate key error (error Code: 11000)
    if (err.code === 11000) {
        const field = Object.keys(err.keyPattern)[0];
        return res.status(400).json({
            success: false,
            message: `${err.keyValue[field]} already exists. Please try another one.`,
        });
    }

    // mongoose Validation Error
    if (err.name === "ValidationError") {
        const messages = Object.values(err.errors).map(val => val.message);
        return res.status(400).json({
            success: false,
            message: "Validation Error",
            errors: messages,
        });
    }

    // handle CastError (eg. invalid ObjectId)
    if (err.name === "CastError") {
        return res.status(400).json({
            success: false,
            message: `Invalid ${err.path}: ${err.value}.`,
        });
    }

    // default Error
    return res.status(err.status || 500).json({
        success: false,
        message: err.message || "An unexpected error occurred",
    });
};

module.exports = errorHandler;
