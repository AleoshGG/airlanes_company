// Import dependencies
const express = require("express");
const router = express.Router();
const bankDataController = require("../controllers/bank_data.js");

// URLs
router.post("/add", bankDataController.addBankData);
router.get("/:id", bankDataController.getBankData);
router.put("/update/:id/:account", bankDataController.updateBankData);
router.delete("/delete/:id/:account", bankDataController.deleteBankData);

module.exports = router;
