// Import dependencies
require("dotenv").config();
const db = require("../config/connection");

// TODO: develop controllers

// Test message
exports.message = (req, res) => {
   res.json({
    msg: "OKAY"
   })
};