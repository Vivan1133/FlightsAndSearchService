const express = require("express");
const router = express.Router();
const CityController = require("../../controllers/index");

router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.read);
router.get("/city", CityController.readAll);
router.patch("city/:id", CityController.update);

module.exports = router;