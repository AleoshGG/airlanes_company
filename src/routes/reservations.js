// Import dependencies
const express = require("express");
const router = express.Router();
const reservationsController = require("../controllers/reservations.js");

// URLs
router.post("/add", reservationsController.addReservation);
router.get("/:id", reservationsController.getAll);
router.put("/update/:id", reservationsController.updateReservation);
router.delete("/delete/:id", reservationsController.deleteReservation);

module.exports = router;
