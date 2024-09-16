// Import dependencies
require("dotenv").config();
const { where } = require("sequelize");
const Plane = require("../models/planes.js");

// Create plane
exports.addPlane = async (req, res) => {
   try {
      const { model, number_seats, load_capacity } = req.body;
      const newPlane = await Plane.create({ model, number_seats, load_capacity });
      res.status(201).send("Resource created successfully");
   } catch (err) {
      return res.status(500).send(`Error has occurred: ${err}`);
   }
};

// Get all planes
exports.getAllPlanes = async (req, res) => {
   try {
      const planes = await Plane.findAll();
      res.status(200).json({ planes });
   } catch (err) {
      return res.status(500).send(`Error has occurred: ${err}`);
   }
};

// Update plane
exports.updatePlane = async (req, res) => {
   try {
      const { model, number_seats, load_capacity } = req.body;
      const id = req.params.id;
      const plane = await Plane.update(
         { model, number_seats, load_capacity },
         { where: { id_planes: id } }
      );
      res.status(200).send("Resource updated successfully");
   } catch (err) {
      return res.status(500).send(`Error has occurred: ${err}`);
   }
};

// Delete plane
exports.deletePlane = async (req, res) => {
   try {
      const id = req.params.id;
      const plane = await Plane.destroy({ where: { id_planes: id } });
      res.status(200).send("Resource deleted successfully");
   } catch (err) {
      return res.status(500).send(`Error has occurred: ${err}`);
   }
};
