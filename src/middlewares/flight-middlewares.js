const { ClientErrorCodes } = require("../utils/error-codes");

function validateCreateFlight(req, res, next) {
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.departureTime ||
        !req.body.arrivalTime ||
        !req.body.price
    ) {
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data: {},
            message: "flight create validation failed at middleware",
            error: "missing field in the req body",
            success: false
        })
    }

    next();
}

module.exports = {
    validateCreateFlight
}