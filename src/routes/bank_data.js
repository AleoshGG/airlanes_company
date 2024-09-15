// Import dependencies
const express = require("express");
const router = express.Router();
const bank_data = require("../controllers/bank_data.js");

// URLs
router.post("/add", bank_data.addBankData);
router.get("/:id", bank_data.getBankData);
router.put("/update/:id", bank_data.updateBankData);
router.delete("/delete/:id_bank/:id_user", bank_data.deleteBankData);

module.exports = router;
