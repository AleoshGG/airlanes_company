// Import dependencies
const express = require("express");
const router = express.Router();
const planesController = require("../controllers/planes");


//Urls
router.get('/', planesController.getPlanes);
router.get('/plane/:id', planesController.getPlaneById);
router.post('/plane', planesController.createPlane);
router.put('/plane/:id', planesController.updatePlane);
router.delete('/plane/:id', planesController.deletePlane);


module.exports = router;