const { FlightRepository, AirplaneRepository } = require("../repositories/index")
const { compareDateTime } = require("../utils/helper");
const CrudService = require("./crud-service");

class FlightService extends CrudService{
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
        super(this.flightRepository);
    }
    async create(data) {
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
}

module.exports = FlightService;