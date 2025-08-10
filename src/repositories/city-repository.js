const res = require("express/lib/response");
const { City } = require("../models/index");
const { response } = require("express");

class CityRepository {
    async createCity({ name }) {
        try {
            const response = await City.create({
                name
            });
            return response;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw { error };
        }
    }
    async deleteCity(cityId) {
        try {
            const response = await City.destroy({
                id: cityId
            });
            return response;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw { error };
        }
    }
    async updateCity(id, data) {
        try {
            const response = await City.update(data, {
            where: {
                id
            }
            });
            return response;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw { error };
        }
    }
    async getCity(id) {
        try {
            const reponse = await City.findByPk(id);
            return response;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw { error };
        }
    }
}

module.exports = CityRepository;    