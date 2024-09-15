// Import dependencies
require("dotenv").config();
const { where } = require("sequelize");
const Bank_Data = require("../models/bank_data.js");

// TODO: Develop controllers

// Create bank_data
exports.addBankData = async (req, res) => {
   try {
      const { account_number, expiration_date, id_user } = req.body;
      const newBankData = await Bank_Data.create({ account_number, expiration_date, id_user });
      res.status(201).send("Resource created successfully");
   } catch (err) {
      return res.status(500).send(`Error has occurred: ${err}`);
   }
};

// Get Bank_data
exports.getBankData = async (req, res) => {
   try {
      const id = req.params.id;
      const bank_data = await bank_data.findAll({where: {id_user: id}});
      res.status(200).json({bank_data})
   } catch (err) {
      return res.status(500).send(`Error has occurred: ${err}`);
   }
};

// update bank_data
exports.updateBankData = async (req, res) => {
   try {
      const { account_number, expiration_date, id_user } = req.body;
      const id = req.params.id;
      const account = req.params.account;
      const bank_data = await Bank_Data.update({ account_number, expiration_date, id_user }, { where: {id_user: id, account_number: account}});
      res.status(200).send("Resource updated successfully");
   } catch (err) {
      return res.status(500).send(`Error has occurred: ${err}`);
   }
};

// delete bank_data
exports.deleteBankData = async (req, res) => {
   try {
      const id = req.params.id;
      const account = req.params. account;
      const bank_data = await Bank_Data.destroy({ where: {id_user: id, account_number: account}});
      res.status(200).send("Resource deleted successfully");
   } catch (err) {
      return res.status(500).send(`Error has occurred: ${err}`);
   }
};
