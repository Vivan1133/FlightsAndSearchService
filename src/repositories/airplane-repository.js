const { Airplane } = require("../models/index");

class AirplaneRepository {
    async getAirplane(id) {
        try {
            const response = await Airplane.findByPk(id);
            return response;
        } catch (error) {
            console.log("something went wrong in the repository section");
            throw { error };
        }
    }

    
}

module.exports = AirplaneRepository;