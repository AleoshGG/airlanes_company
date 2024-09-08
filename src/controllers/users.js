// Import dependencies
require("dotenv").config();
const db = require("../config/connection.js");

// TODO: Develop controllers

// Test message
exports.message = (req, res) => {
   res.json({
    msg: "OKAY"
   })
};