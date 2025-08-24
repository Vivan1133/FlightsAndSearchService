const { AirportService } = require("../services/index")

const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const response = await airportService.createAirport(req.body);
        return res.status(201).json({
            message: "successfully created airport",
            error: {},
            data: response,
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "can not create airport",
            error: error,
            data: {},
            success: false
        })
    }
}

const update = async (req, res) => {
    try {
        const response = await airportService.updateAirport(req.params.id, req.body);
        return res.status(201).json({
            message: "successfully updated the airport",
            error: {},
            data: response,
            success: true
        }) 
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "can not update the airport",
            error: error,
            data: {},
            success: false
        })
    }
}

const destroy = async (req, res) => {
    try {
        const response = await airportService.deleteAirport(req.params.id);
        return res.status(201).json({
            message: "successfully deleted the airport",
            error: {},
            data: response,
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "can not delete the airport",
            error: error,
            data: {},
            success: false
        })
    }
}

const read = async (req, res) => {
    try {
        const response = await airportService.getAirport(req.params.id);
        return res.status(201).json({
            message: "successfully retrieved the data",
            error: {},
            data: response,
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "can not retrieve data",
            error: error,
            data: {},
            success: false
        })
    }
}

const readAll = async (req, res) => {
    try {
        const response = await airportService.getAllAirport(req.query);
        return res.status(201).json({
            message: "successfully fetched all data",
            error: {},
            data: response,
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "can not read the data",
            error: error,
            data: {},
            success: false
        })
    }
}

const readAirportOfCity = async (req, res) => {
    try {
        const response = await airportService.getAirportOfCity(req.params.id);
        return res.status(201).json({
            message: "successfully fetched all data",
            error: {},
            data: response,
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "can not read the data",
            error: error,
            data: {},
            success: false
        })
    }
}

module.exports = {
    create, 
    read,
    update,
    destroy,
    readAll
}   