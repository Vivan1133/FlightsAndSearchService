const { Flight } = require("../models/index");
const { Op } = require("sequelize");
const CrudRepository = require("./crud-repository");

class FlightRepository extends CrudRepository{

    constructor() {
        super(Flight);
    }

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

    async getAll(filter) {
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