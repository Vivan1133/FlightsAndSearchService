const res = require("express/lib/response");
const { CityRepository } = require("../repositories/index");
const { response } = require("express");

class CityService {
    constructor() {
        this.cityRespository = new CityRepository();
    }

    async createCity(data) {
        try {
            const response = await this.cityRespository.createCity(data);
            return response;
        } catch (error) {
            console.log("something went wrong in city service");
            throw {error};
        }
    }
    async deleteCity(cityId) {
        try {
            const response = await this.cityRespository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("something went wrong in city service");
            throw {error};
        }
    }
    async updateCity(id, data) {
        try {
            const response = await this.cityRespository.updateCity(id, data);
            return response;
        } catch (error) {
            console.log("something went wrong in city service");
            throw {error};
        }
    }
    async getCity(id) {
        try {
            const reponse = await this.cityRespository.getCity(id);
            return response;
        } catch (error) {
            console.log("something went wrong in city service");
            throw {error};
        }
    }
}

module.exports = CityService;