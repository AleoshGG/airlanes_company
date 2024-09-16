// Import dependencies
require("dotenv").config();
const { where } = require("sequelize");
const Passenger = require("../models/passengers.js"); 

// Create passenger
exports.createPassenger = async (req, res) => {
   try {
      const { first_name, last_name, email, phone_number_, birthdate } = req.body;
      const newPassenger = await Passenger.create({ first_name, last_name, email, phone_number_, birthdate });
      res.status(201).send("Resource created successfully");
   } catch (err) {
      return res.status(500).send(`Error has occurred: ${err}`);
   }
};

// Get all passengers
exports.getAllPassengers = async (req, res) => {
   try {
      const passengers = await Passenger.findAll();
      res.status(200).json({ passengers });
   } catch (err) {
      return res.status(500).send(`Error has occurred: ${err}`);
   }
};

// Update passenger
exports.updatePassenger = async (req, res) => {
   try {
      const { first_name, last_name, email, phone_number_, birthdate  } = req.body;
      const id = req.params.id;
      const passenger = await passenger.update(
         { first_name, last_name, email, phone_number_, birthdate  },
         { where: { id_passenger: id } }
      );
      res.status(200).send("Resource updated successfully");
   } catch (err) {
      return res.status(500).send(`Error has occurred: ${err}`);
   }
};

// Delete passenger
exports.deletePassenger = async (req, res) => {
   try {
      const id = req.params.id;
      const passenger = await Passenger.destroy({ where: { id_passenger: id } });
      res.status(200).send("Resource deleted successfully");
   } catch (err) {
      return res.status(500).send(`Error has occurred: ${err}`);
   }
};