// Import dependencies
const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

// Define table
const Flights = sequelize.define(
  "Flights",
  {
    id_flight: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true, 
      autoIncrement: true, 
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    origin: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    destination: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "flights",
    timestamps: false,
  }
);

module.exports = Flights;
