// Import dependencies
const express = require("express");
const router = express.Router();
const haveController = require("../controllers/have.js");

// URLs
router.post("/add", haveController.addHave);
router.get("/get/:id_flight", haveController.getFlight);
router.get("/get/:id_planes", haveController.getPlanes);
router.put("/update/:id_have", haveController.updateHave);
router.delete("/delete/:id_have", haveController.deleteHave);

module.exports = router;
