const { CityRepository } = require("../repositories/index");
const CrudService = require("./crud-service");

class CityService extends CrudService{
    constructor() {
        const cityRespository = new CityRepository();
        super(cityRespository);
    }
}

module.exports = CityService;