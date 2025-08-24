const { response } = require("express");
const { AirportRepository, CityRepository } = require("../repositories/index");

class AirportService {
    constructor() {
        this.airportRepository = new AirportRepository();
    }

    async getAirportOfCity(id) {

    }

    async createAirport({ name, address, cityId}) {
        try {
            const response = await this.airportRepository.createAirport({ name, address, cityId });
            return response;
        } catch (error) {
            console.log("something went wrong in airport service");
            throw { error };
        }
    }

    async deleteAirport(airportId) {
        try {
            const response = await this.airportRepository.deleteAirport(airportId);
            return response;
        } catch (error) {
            console.log("something went wrong in airport service");
            throw { error };
        }
    }

    async updateAirport(id, data) {
        try {
            const reponse = await this.airportRepository.updateAirport(id, data);
            return response;
        } catch (error) {
            console.log("something went wrong in airport service");
            throw { error };
        }
    }

    async getAirport(id) {
        try {
            const reponse = await this.airportRepository.getAirport(id);
            return response;
        } catch (error) {
            console.log("something went wrong in airport service");            
            throw { error };
        }
    }

    async getAllAirport(filter) {
        try {
            const response = await this.airportRepository.getAllAirport(filter);
            return response;
        } catch (error) {
            console.log("something went wrong in airport service");
            throw { error };
        }
    }
}

module.exports = AirportService;