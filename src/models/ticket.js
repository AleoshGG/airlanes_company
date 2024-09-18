// Import dependencies
const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

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
    id_passenger: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "passengers",
        key: "id_passenger",
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
    tableName: "tickets",
    timestamps: false,
  }
);

module.exports = Tickets;
