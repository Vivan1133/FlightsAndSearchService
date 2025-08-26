const express = require("express");
const router = express.Router();
const { CityController, AirportController, FlightController } = require("../../controllers/index");

// api/v1/flights
router.post("/flights", FlightController.create);
router.get("/flights", FlightController.readAll);


// api/v1/airport
router.post("/airport", AirportController.create);
router.delete("/airport/:id", AirportController.destroy);
router.get("/airport/:id", AirportController.read);
router.get("/airport", AirportController.readAll);
router.patch("airport/:id", AirportController.update);

// api/v1/city
router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.read);
router.get("/city", CityController.readAll);
router.patch("city/:id", CityController.update);

module.exports = router;