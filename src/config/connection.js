// Import dependencies
require("dotenv").config;
const { Sequelize } = require("sequelize");

// Initialize connection parameters
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// Start connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection is Successful");
  })
  .catch((err) => {
    console.error("Can not to connect the data base: ", err);
  });

module.exports = sequelize;
