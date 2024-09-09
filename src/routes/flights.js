// Import dependencies
const express = require("express");
const router = express.Router();
const flightsControlleer = require("../controllers/flights");

// URLs
router.get("/", flightsControlleer.getFlights);
router.get("/flight/:id", flightsControlleer.getFlightsById);
router.post("/flight", flightsControlleer.createFlight);
router.put("/flight/:id", flightsControlleer.updateFlights);
router.delete("/flight/:id", flightsControlleer.deleteFlights);


module.exports = router;
