// Import dependencies
const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

// Define table
const Assignments = sequelize.define(
  "Assignments",
  {
    id_assignment: {
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
    tableName: "assignments",
    timestamps: false,
  }
);

module.exports = Assignments;
