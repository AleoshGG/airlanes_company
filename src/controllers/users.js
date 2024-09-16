// Import dependencies
require("dotenv").config();
const { where } = require("sequelize");
const User = require("../models/user.js");

// Create user
exports.addUser = async (req, res) => {
   try {
      const { first_name, last_name, email, password, phone_number } = req.body;
      const newUser = await User.create({ first_name, last_name, email, password, phone_number });
      res.status(201).send("Resource created successfully");
   } catch (err) {
      return res.status(500).send(`Error has occurred: ${err}`);
   }
};

// Get user
exports.getAllUser = async (req, res) => {
   try {
      const users = await User.findAll();
      res.status(200).json({ users })
   } catch (err) {
      return res.status(500).send(`Error has occurred: ${err}`);
   }
};

// update user
exports.updateUser = async (req, res) => {
   try {
      const { first_name, last_name, email, password, phone_number } = req.body;
      const id = req.params.id;
      const user = await User.update({ first_name, last_name, email, password, phone_number }, { where: { id_user: id } });
      res.status(200).send("Resource updated successfully");
   } catch (err) {
      return res.status(500).send(`Error has occurred: ${err}`);
   }
};

// delete user
exports.deleteUser = async (req, res) => {
   try {
      const id = req.params.id;
      const user = await User.destroy({ where: { id_user: id } });
      res.status(200).send("Resource deleted successfully");
   } catch (err) {
      return res.status(500).send(`Error has occurred: ${err}`);
   }
};
