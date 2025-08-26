const { CityRepository } = require("../repositories/index");
const CrudService = require("./crud-service");

class CityService extends CrudService{
    constructor() {
        this.cityRespository = new CityRepository();
        super(this.cityRespository);
    }
}

module.exports = CityService;