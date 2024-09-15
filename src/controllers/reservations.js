// Import dependencies
require("dotenv").config();
const { where } = require("sequelize");
const reservation = require("../models/reservation.js");

// TODO: Develop controllers

// Create reservation
exports.addReservation = async (req, res) => {
   try {
      const { status, date, id_user, id_flight } = req.body;
      const newReservation= await reservation.create({ status, date, id_user, id_flight });
      res.status(201).send("Resource created successfully");
   } catch (err) {
      return res.status(500).send(`Error has occurred: ${err}`);
   }
};

// Get reservations
exports.getAll = async (req, res) => {
   try {
      const id_user = req.params.id;  
      const  reservations = await reservation.findAll({ where: {id_user: id_user}});
      res.status(200).json({reservations})
   } catch (err) {
      return res.status(500).send(`Error has occurred: ${err}`);
   }
};

// update reservation
exports.updateReservation = async (req, res) => {
   try {
      const { status, date, id_user, id_flight } = req.body;
      const id = req.params.id;
      const reservation = await reservation.update({ status, date, id_user, id_flight }, { where: {id_reservation: id}});
      res.status(200).send("Resource updated successfully");
   } catch (err) {
      return res.status(500).send(`Error has occurred: ${err}`);
   }
};

// delete reservation
exports.deleteReservation = async (req, res) => {
   try {
      const id = req.params.id;
      const reservation = await reservation.destroy({ where: {id_reservation: id}});
      res.status(200).send("Resource deleted successfully");
   } catch (err) {
      return res.status(500).send(`Error has occurred: ${err}`);
   }
};
