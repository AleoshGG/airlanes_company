// Import dependencies
const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

// Define Payments 
const Payment = sequelize.define(
    "Payment",
    {
      id_payment: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      id_reservation: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Reservation", // Nombre del modelo referenciado
          key: "id_reservation",
        },
      },
    },
    {
      tableName: "payments",
      timestamps: false,
    }
  );

  module.exports = Payment;