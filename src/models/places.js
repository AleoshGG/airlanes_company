// Import dependencies
const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

// Define Places model
const Place = sequelize.define(
    "Place",
    {
      id_place: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      state: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      airport_name: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
    },
    {
      tableName: "places",
      timestamps: false,
    }
  );

  module.exports = Place;