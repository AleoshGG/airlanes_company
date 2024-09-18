//Import dependencies
const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

//Define table
const Passengers = sequelize.define(
  "Passengers",
  {
    id_passenger: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.INTEGER(12),
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "passengers",
    timestamps: false,
  }
);

module.exports = Passengers;
