// Import dependencies
const express = require("express");
const router = express.Router();
const placesController = require("../controllers/places");

// URLs
router.get('/', placesController.getPlaces);
router.get('/place/:id', placesController.getPlaceById);
router.post('/place', placesController.createPlace);
router.put('/place/:id', placesController.updatePlace);
router.delete('/place/:id', placesController.deletePlace);


module.exports = router;
