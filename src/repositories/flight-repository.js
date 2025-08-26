const { Flight } = require("../models/index");
const { Op } = require("sequelize");

class FlightRepository {

    #createFilter(data) {
        let filter = {};
        if(data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }
        if(data.minPrice && data.maxPrice) {
            Object.assign(filter, { 
                    [Op.and]: [
                        {price: {[Op.gte]: data.minPrice}},
                        {price: {[Op.lte]: data.maxPrice}}
                    ]
                }
            )
        }
        else if(data.minPrice) {
            Object.assign(filter, { price: { [Op.gte]: data.minPrice } })
        }
        else if(data.maxPrice) {
            Object.assign(filter, { price: { [Op.lte]: data.maxPrice } })
        }

        
        return filter;
    }

    async createFlight(data) {
        try {
            const response = await Flight.create(data);
            return response;
        } catch (error) {
            console.log("something went wrong in the repository section");
            throw { error };
        }
    }

    async getFlight(flightId) {
        try {
            const response = await Flight.findByPk(flightId);
            return response;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw { error };
        }
    }

    async getAllFlight(filter) {
        try {
            const filterObject = this.#createFilter(filter);
            const response = await Flight.findAll({
                where: filterObject
            });
            return response;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            return { error };
        }
    }

    async updateFlight(data, flightId) {
        try {
            const response = await Flight.update(data, {
                where: {
                    flightId
                }
            })
            return response;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            return { error };
        }
    }

    async destroyFlight(flightId) {
        try {
            const response = await Flight.destory({
                where: {
                    flightId
                }
            })
        } catch (error) {
            console.log("something went wrong in the repository layer");
            return { error };
        }
    }
}

module.exports = FlightRepository;



/**
 * {
 *  where: {
 *      arrivalAirportId: something,
 *      departureAirportId: something,
 *      [Op.gte]: 4000
 *  }
 * }
 */