// Import dependencies
require("dotenv").config();
const { where } = require("sequelize");
const Payment = require("../models/payment"); 

// Create payment
exports.createPayment = async (req, res) => {
   try {
      const { amount, date, id_reservation } = req.body;
      const newPayment = await Payment.create({ amount, date, id_reservation });
      res.status(201).send("Resource created successfully");
   } catch (err) {
      return res.status(500).send(`Error has occurred: ${err}`);
   }
};

// Get all payments
exports.getAllPayments = async (req, res) => {
   try {
      const payments = await Payment.findAll();
      res.status(200).json({ payments });
   } catch (err) {
      return res.status(500).send(`Error has occurred: ${err}`);
   }
};

// Update payment
exports.updatePayment = async (req, res) => {
   try {
      const { amount, date, id_reservation } = req.body;
      const id = req.params.id;
      const payment = await Payment.update(
         { amount, date, id_reservation },
         { where: { id_payment: id } }
      );
      res.status(200).send("Resource updated successfully");
   } catch (err) {
      return res.status(500).send(`Error has occurred: ${err}`);
   }
};

// Delete payment
exports.deletePayment = async (req, res) => {
   try {
      const id = req.params.id;
      const payment = await Payment.destroy({ where: { id_payment: id } });
      res.status(200).send("Resource deleted successfully");
   } catch (err) {
      return res.status(500).send(`Error has occurred: ${err}`);
   }
};
