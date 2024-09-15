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
    },
  },
  {
    tableName: "bank_data",
    timestamps: false,
    indexes: [
      {
        unique: true,
        fields: ["account_number", "id_user"],
      },
    ],
  }
);

User.hasMany(Bank_Data, { foreignKey: "id_user" });
Bank_Data.belongsTo(User, { foreignKey: "id_user" });

module.exports = Bank_Data;
