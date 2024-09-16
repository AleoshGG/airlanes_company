// Import dependencies
const express = require("express");
const router = express.Router();
const passengersControlleer = require("../controllers/passengers");

// URLs
router.get("/", passengersControlleer.getPassengers);
router.get("/passenger/:id", passengersControlleer.getPassengerById);
router.post("/passenger", passengersControlleer.createPassenger);
router.put("/passenger/:id", passengersControlleer.updatePassenger);
router.delete("/passenger/:id", passengersControlleer.deletePassengers);


module.exports = router;
