// Import dependencies
require("dotenv").config();
const { where } = require("sequelize");
const Place = require("../models/places.js"); 

// Create place
exports.addPlace = async (req, res) => {
   try {
      const { country, state, airport_name } = req.body;
      const newPlace = await Place.create({ country, state, airport_name });
      res.status(201).send("Resource created successfully");
   } catch (err) {
      return res.status(500).send(`Error has occurred: ${err}`);
   }
};

// Get all places
exports.getAllPlaces = async (req, res) => {
   try {
      const places = await Place.findAll();
      res.status(200).json({ places });
   } catch (err) {
      return res.status(500).send(`Error has occurred: ${err}`);
   }
};

// Update place
exports.updatePlace = async (req, res) => {
   try {
      const { country, state, airport_name } = req.body;
      const id = req.params.id;
      const place = await Place.update(
         { country, state, airport_name },
         { where: { id_place: id } }
      );
      res.status(200).send("Resource updated successfully");
   } catch (err) {
      return res.status(500).send(`Error has occurred: ${err}`);
   }
};

// Delete place
exports.deletePlace = async (req, res) => {
   try {
      const id = req.params.id;
      const place = await Place.destroy({ where: { id_place: id } });
      res.status(200).send("Resource deleted successfully");
   } catch (err) {
      return res.status(500).send(`Error has occurred: ${err}`);
   }
};
