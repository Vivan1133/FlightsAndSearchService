const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const response = await flightService.createFlight(req.body);
        return res.status(201).json({
            message: "successfully created a flight",
            error: {},
            data: response,
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "can not create flight",
            error: error,
            data: {},
            success: false
        })
    }
}

module.exports = {
    create
}