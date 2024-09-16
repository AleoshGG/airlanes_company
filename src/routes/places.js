// Import dependencies
const express = require("express");
const router = express.Router();
const placesController = require("../controllers/places.js");

// URLs
router.post("/add", placesController.addPlace);
router.get("/", placesController.getAllPlaces);
router.put("/update/:id", placesController.updatePlace);
router.delete("/delete/:id", placesController.deletePlace);

module.exports = router;