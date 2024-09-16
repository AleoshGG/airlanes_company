// Import dependencies
require("dotenv").config();
const { where } = require("sequelize");
const Flight = require("../models/flights.js"); 

// Create Flight
exports.createFlight = async (req, res) => {
   try {
      const { first_name, last_name, email, phone_number_, birthdate } = req.body;
      const newFlight
     = await Flight
    .create({ first_name, last_name, email, phone_number_, birthdate });
      res.status(201).send("Resource created successfully");
   } catch (err) {
      return res.status(500).send(`Error has occurred: ${err}`);
   }
};

// Get all Flights
exports.getAllFlights = async (req, res) => {
   try {
      const Flights = await Flight
    .findAll();
      res.status(200).json({ Flights });
   } catch (err) {
      return res.status(500).send(`Error has occurred: ${err}`);
   }
};

// Update Flight
exports.updateFlight = async (req, res) => {
   try {
      const { first_name, last_name, email, phone_number_, birthdate  } = req.body;
      const id = req.params.id;
      const Flight
     = await Flight
    .update(
         { first_name, last_name, email, phone_number_, birthdate  },
         { where: { id_Flight
        : id } }
      );
      res.status(200).send("Resource updated successfully");
   } catch (err) {
      return res.status(500).send(`Error has occurred: ${err}`);
   }
};

// Delete Flight
exports.deleteFlight = async (req, res) => {
   try {
      const id = req.params.id;
      const Flight
     = await Flight
    .destroy({ where: { id_Flight
      : id } });
      res.status(200).send("Resource deleted successfully");
   } catch (err) {
      return res.status(500).send(`Error has occurred: ${err}`);
   }
};