// Import dependencies
require("dotenv").config();
const db = require("../config/connection");

// TODO: Develop controllers

// get all fligths
exports.getFlights = (req, res) => {
    console.log("Request received for fetching flights");
  
    db.query("SELECT * FROM flights", (err, results) => {
      if (err) {
        console.log("Database query error: ", err);
        return res.status(500).json({ error: "Database query error" });
      }
      console.log("Flights fetched successfully", results);
      res.json(results);
    });
  };

  //get a simple flight with ID
  exports.getFlightsById = (req, res) => {
    const id = req.params.id;
    console.log(`Fetching flights with ID: ${id}`);
  
    db.query("SELECT * FROM flights WHERE id_flights = ?", [id], (err, result) => {
      if (err) {
        console.log("Error fetching Flights by ID: ", err);
        return res.status(500).json({ error: "Database query error" });
      }
      console.log("Flights fetched successfully", result);
      res.json(result[0]);
    });
  };

  // Create a new flight
exports.createFlight = (req, res) => {
    const { id_flight, date, price, origin, destination } = req.body;
    console.log("Creating a new fligth");
  
    db.query(
      "INSERT INTO flights (id_flight, date, price, origin, destination ) VALUES (?, ?, ?, ?, ?)",
      [id_flight, date, price, origin, destination],
      (err, result) => {
        if (err) {
          console.log("Error creating new flight: ", err);
          return res.status(500).json({ error: "Database query error" });
        }
        console.log("Flight created successfully", result);
        res.json({ id: result.insertId });
      }
    );
  };

  // Update a flight by ID
exports.updateFlights = (req, res) => {
    const id = req.params.id;
    const { id_flight, date, price, origin, destination} = req.body;
    console.log(`Updating flights with ID: ${id}`);
  
    db.query(
      "UPDATE flights SET date= ?, price = ?, origin = ?, destination = ? WHERE id_flight = ?",
      [id_flight, date, price, origin, destination],
      (err, result) => {
        if (err) {
          console.log("Error updating passengers: ", err);
          return res.status(500).json({ error: "Database query error" });
        }
        console.log("Flight updated successfully", result);
        res.json({ message: "Flights updated" });
      }
    );
  };

  // Delete a flight by ID
exports.deleteFlights = (req, res) => {
    const id = req.params.id;
    console.log(`Deleting Flights with ID: ${id}`);
  
    db.query("DELETE FROM flights WHERE id_flights = ?", [id], (err, result) => {
      if (err) {
        console.log("Error deleting Flight: ", err);
        return res.status(500).json({ error: "Database query error" });
      }
      console.log("Flight deleted successfully", result);
      res.json({ message: "Flight deleted" });
    });
  };