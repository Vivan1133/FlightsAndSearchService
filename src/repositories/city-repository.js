const { City } = require("../models/index");
const { Op } = require("sequelize");
const CrudRepository = require("./crud-repository");

class CityRepository extends CrudRepository {

    constructor() {
        super(City);
    }

    async getAll(filter) {
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