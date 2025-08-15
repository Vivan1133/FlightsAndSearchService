const res = require("express/lib/response");
const { City } = require("../models/index");
const { response } = require("express");
const { where } = require("sequelize");
const { Op } = require("sequelize");

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
                where: {
                    id: cityId
                }
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
            const response = await City.findByPk(id);
            return response;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw { error };
        }
    }

    async getAllCity(filter) {
        try {
            if(filter.name) {
                const response = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                })
                return response;
            }
            const response = await City.findAll();
            return response;
        } catch (error) {
            console.log("something went wrong in the repository section");
            throw { error };
        }
    }
}

module.exports = CityRepository;    