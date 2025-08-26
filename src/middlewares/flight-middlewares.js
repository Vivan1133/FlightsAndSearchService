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
        return res.status(400).json({
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