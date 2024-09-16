// Import dependencies
const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");
const User = require("./user.js");
const Flight = require("../models/flights.js");

// Define table
const Reservations = sequelize.define(
  "Reservations",
  {
    id_reservation: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    id_user: {
      type: DataTypes.DATE,
      allowNull: false,
      references: {
        model: "user",
        key: "id_user",
      },
    },
    id_flight: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "flight",
        key: "id_flight",
      },
    },
  },
  {
    tableName: "reservations",
    timestamps: false,
  }
);

module.exports = Reservations;
