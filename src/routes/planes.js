// Import dependencies
const express = require("express");
const router = express.Router();
const planesController = require("../controllers/planes.js");

// URLs
router.post("/add", planesController.addPlane);
router.get("/", planesController.getAllPlanes);
router.put("/update/:id", planesController.updatePlane);
router.delete("/delete/:id", planesController.deletePlane);

module.exports = router;