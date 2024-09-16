// Import dependencies
const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");


const Plane = sequelize.define(
    "Planes",
    {
      id_planes: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      model: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      number_seats: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      load_capacity: {
        type: DataTypes.DECIMAL(10, 2),
      },
    },
    {
      tableName: "planes",
      timestamps: false,
    }
  );

  module.exports = Plane;