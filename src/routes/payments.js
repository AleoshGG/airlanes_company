// Import dependencies
const express = require("express");
const router = express.Router();
const paymentsController = require("../controllers/payments");

// URLs
router.get("/", paymentsController.getPayments);
router.get("/payment/:id", paymentsController.getPaymentById);
router.post("/payment", paymentsController.createPayment);
router.put("/payment/:id", paymentsController.updatePayment);
router.delete("/payment/:id", paymentsController.deletePayment);


module.exports = router;
