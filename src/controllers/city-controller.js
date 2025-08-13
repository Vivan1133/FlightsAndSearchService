const { status } = require("express/lib/response");
const { CityService } = require("../services/index");

const cityService = new CityService();

const create = async (req, res) => {
    try {
        const response = await cityService.createCity(req.body);
        return res.status(201).json({
            message: "successfully created city",
            error: {},
            data: response,
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "can not create city",
            error: error,
            data: {},
            success: false
        })
    }
}

const update = async (req, res) => {
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(201).json({
            message: "successfully updated the city",
            error: {},
            data: response,
            success: true
        }) 
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "can not update the city",
            error: error,
            data: {},
            success: false
        })
    }
}

const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(201).json({
            message: "successfully deleted the city",
            error: {},
            data: response,
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "can not delete the city",
            error: error,
            data: {},
            success: false
        })
    }
}

const read = async (req, res) => {
    try {
        const response = await cityService.getCity(req.params.id);
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
        const response = await cityService.getAllCity();
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