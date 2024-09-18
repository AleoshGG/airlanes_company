// Import dependencies
const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");
const User = require("../models/user.js");

// Define table
const Bank_Data = sequelize.define(
  "Bank_Data",
  {
    account_number: {
      type: DataTypes.STRING(16),
      allowNull: false,
      primaryKey: true,
    },
    expiration_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "users",
        key: "id_user",
      },
    },
  },
  {
    tableName: "bank_data",
    timestamps: false,
  }
);

module.exports = Bank_Data;
