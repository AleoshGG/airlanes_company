// Import dependencies
const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");
const Planes = require("../models/planes.js");
const Flights = require("../models/flights.js");

// Define table
const Tickets = sequelize.define(
  "Tickets",
  {
    id_ticket: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id_planes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "planes",
        key: "id_planes",
      },
    },
    id_flight: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "flights",
        key: "id_flight",
      },
    },
  },
  {
    tableName: "Tickets",
    timestamps: false,
  }
);

module.exports = Tickets;
