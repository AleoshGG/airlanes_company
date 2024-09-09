// Import dependencies
require("dotenv").config;
const mysql = require("mysql2");

// Initialize connection parameters
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// Start connection
db.connect((err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Connection is Successful");
});


module.exports = db;
