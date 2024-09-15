// Import dependencies
require("dotenv").config();
const { where } = require("sequelize");
const Ticket = require("../models/ticket.js");

// TODO: Develop controllers

// Create ticket
exports.addTicket = async (req, res) => {
   try {
      const { id_planes, id_flight } = req.body;
      const newTicket= await Ticket.create({ id_planes, id_flight });
      res.status(201).send("Resource created successfully");
   } catch (err) {
      return res.status(500).send(`Error has occurred: ${err}`);
   }
};

// Get tickets
exports.getAll = async (req, res) => {
   try {
      const tickets = await Ticket.findAll();
      res.status(200).json({tickets})
   } catch (err) {
      return res.status(500).send(`Error has occurred: ${err}`);
   }
};

// update ticket
exports.updateTicket = async (req, res) => {
   try {
      const { id_planes, id_flight } = req.body;
      const id_ticket = req.params.id;
      const ticket = await Ticket.update({ id_planes, id_flight }, { where: {id_ticket: id_ticket}});
      res.status(200).send("Resource updated successfully");
   } catch (err) {
      return res.status(500).send(`Error has occurred: ${err}`);
   }
};

// delete ticket
exports.deleteTicket = async (req, res) => {
   try {
      const id = req.params.id;
      const ticket = await Ticket.destroy({ where: {id_ticket: id}});
      res.status(200).send("Resource deleted successfully");
   } catch (err) {
      return res.status(500).send(`Error has occurred: ${err}`);
   }
};
