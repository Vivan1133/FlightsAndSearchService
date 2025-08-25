const { Flight } = require("../models/index");

class FlightRepository {
    async createFlight(data) {
        try {
            const response = await Flight.create(data);
            return response;
        } catch (error) {
            console.log("something went wrong in the repository section");
            throw { error };
        }
    }
}

module.exports = FlightRepository;