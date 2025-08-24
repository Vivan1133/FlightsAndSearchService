const { Airport } = require("../models/index")

class AirportRepository {
    async createAirport({ name, address, cityId }) {
        try {
            const response = await Airport.create({
                name, address, cityId
            });
            return response;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw { error };
        }
    }
    async deleteAirport(airportId) {
        try {
            const response = await Airport.destroy({
                where: {
                    id: airportId
                }
            });
            return response;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw { error };
        }
    }
    async updateAirport(id, data) {
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
    async getAirport(id) {
        try {
            const response = await Airport.findByPk(id);
            return response;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw { error };
        }
    }

    async getAllAirport(filter) {
        try {
            if(filter.name) {
                const response = await Airport.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                })
                return response;
            }
            const response = await Airport.findAll();
            return response;
        } catch (error) {
            console.log("something went wrong in the repository section");
            throw { error };
        }
    }
}

module.exports = AirportRepository;