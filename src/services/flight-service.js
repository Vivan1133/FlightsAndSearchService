const { FlightRepository, AirplaneRepository } = require("../repositories/index")
const { compareDateTime } = require("../utils/helper");

class FlightService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }
    async createFlight(data) {
        try {
            if(!compareDateTime(data.arrivalTime, data.departureTime)) {
                throw { error: "arrival time can not be greater than departure time"};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data, totalSeats: airplane.capacity 
            });
            return flight;
        } catch (error) {
            console.log("something went wrong in the service layer");
            throw { error };
        }
    }

    async updateFlight(data, flightId) {
        try {
            const response = await this.flightRepository.updateFlight(data, flightId);
            return response;
        } catch (error) {
            console.log("something went wrong in the service layer");
            throw { error };
        }
    }

    async destroyFlight(flightId) {
        try {
            const response = await this.flightRepository.destroyFlight(flightId);
            return response;
        } catch (error) {
            console.log("something went wrong in the service layer");
            throw { error };
        }
    }

    async getFlight(flightId) {
        try {
            const response = await this.flightRepository.getFlight(flightId);
            return response;
        } catch (error) {
            console.log("something went wrong in the service layer");
            throw { error };
        }
    }

    async getAllFlight(filter) {
        try {
            const response = await this.flightRepository.getAllFlight(filter);
            return response;
        } catch (error) {
            console.log("something went wrong in the service layer");
            throw { error };
        }
    }


}

module.exports = FlightService;