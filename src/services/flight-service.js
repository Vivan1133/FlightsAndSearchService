const { FlightRepository, AirplaneRepository } = require("../repositories/index")
const { compareDateTime } = require("../utils/helper");
const CrudService = require("./crud-service");

class FlightService extends CrudService{
    constructor() {
        const flightRepository = new FlightRepository();
        super(flightRepository);
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = flightRepository;
    }
    async create(data) {
        try {
            if(!compareDateTime(data.arrivalTime, data.departureTime)) {
                throw { error: "arrival time can not be greater than departure time"};
            }
            const airplane = await this.airplaneRepository.get(data.airplaneId);
            const flight = await this.flightRepository.create({
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