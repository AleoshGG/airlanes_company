require("dotenv").config();
const { Sequelize } = require("sequelize");

// Initialize connection parameters
const sequelize = new Sequelize(
  "root",
  "limberg1423",
  "ORMSAPIEJercicio",
  {
    host: "127.0.0.1",
    dialect: "mysql",
  }
);

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
