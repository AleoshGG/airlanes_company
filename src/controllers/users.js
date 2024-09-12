// Import dependencies
require("dotenv").config();
const User = require("../models/user.js");

// TODO: Develop controllers

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