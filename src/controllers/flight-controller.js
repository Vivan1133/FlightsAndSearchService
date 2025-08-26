const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flightCreateData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            departureTime: req.body.departureTime,
            arrivalTime: req.body.arrivalTime,
            price: req.body.price
        }
        const response = await flightService.create(flightCreateData);
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

const read = async (req, res) => {
    try {
        const response = await flightService.get(req.query);
        return res.status(201).json({
            message: "successfully fetched a flight",
            error: {},
            data: response,
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "can not fetch a flight",
            error: error,
            data: {},
            success: false
        })
    }
}

const readAll = async (req, res) => {
    try {
        const response = await flightService.getAll(req.query);
        return res.status(201).json({
            message: "successfully fetched all flight",
            error: {},
            data: response,
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "can not fetch flights",
            error: error,
            data: {},
            success: false
        })
    }
}

module.exports = {
    create,
    readAll
}