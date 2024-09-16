// Import dependencies
const express = require("express");
const router = express.Router();
const paymentsController = require("../controllers/payments.js");

// URLs
router.post("/add", paymentsController.createPayment);
router.get("/", paymentsController.getAllPayments);
router.put("/update/:id", paymentsController.updatePayment);
router.delete("/delete/:id", paymentsController.deletePayment);

module.exports = router;