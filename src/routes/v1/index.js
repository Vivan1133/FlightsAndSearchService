const express = require("express");
const router = express.Router();
const { create, destroy } = require("../../controllers/city-controller");

router.post("/city", create);
router.delete("/city/:id", destroy);

module.exports = router;