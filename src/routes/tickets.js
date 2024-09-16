// Import dependencies
const express = require("express");
const router = express.Router();
const ticketsController = require("../controllers/tickets.js");

// URLs
router.post("/add", ticketsController.addTicket);
router.get("/", ticketsController.getAll);
router.put("/update/:id_ticket", ticketsController.updateTicket);
router.delete("/delete/:id", ticketsController.deleteTicket);

module.exports = router;
