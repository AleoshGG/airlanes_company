// Import dependencies
require("dotenv").config();
const db = require("../config/connection");

// TODO: Develop controllers

// get all passengers
exports.getPassengers = (req, res) => {
    console.log("Request received for fetching passengers");
  
    db.query("SELECT * FROM passengers", (err, results) => {
      if (err) {
        console.log("Database query error: ", err);
        return res.status(500).json({ error: "Database query error" });
      }
      console.log("Passenger fetched successfully", results);
      res.json(results);
    });
  };

  //get a simple passenger with ID
  exports.getPassengerById = (req, res) => {
    const id = req.params.id;
    console.log(`Fetching payment with ID: ${id}`);
  
    db.query("SELECT * FROM passengers WHERE id_passenger = ?", [id], (err, result) => {
      if (err) {
        console.log("Error fetching passengers by ID: ", err);
        return res.status(500).json({ error: "Database query error" });
      }
      console.log("Passengers fetched successfully", result);
      res.json(result[0]);
    });
  };

  // Create a new passenger
exports.createPassenger = (req, res) => {
    const { first_name, last_name, email, phone_number,birthdate } = req.body;
    console.log("Creating a new passenger");
  
    db.query(
      "INSERT INTO passenger (first_name, last_name, email, phone_number,birthdate, id_passenger ) VALUES (?, ?, ?, ?, ?, ?)",
      [first_name, last_name, email, phone_number,birthdate ],
      (err, result) => {
        if (err) {
          console.log("Error creating new passenger: ", err);
          return res.status(500).json({ error: "Database query error" });
        }
        console.log("Passenger created successfully", result);
        res.json({ id: result.insertId });
      }
    );
  };

  // Update a payment by ID
exports.updatePassenger = (req, res) => {
    const id = req.params.id;
    const { first_name, last_name, email, phone_number,birthdate, id_passenger} = req.body;
    console.log(`Updating passenger with ID: ${id}`);
  
    db.query(
      "UPDATE passengers SET first_name= ?, last_name = ?, email = ?, phone_number = ?, birthdate = ? WHERE id_passenger = ?",
      [first_name, last_name, email, phone_number,birthdate, id_passenger],
      (err, result) => {
        if (err) {
          console.log("Error updating passengers: ", err);
          return res.status(500).json({ error: "Database query error" });
        }
        console.log("Passenger updated successfully", result);
        res.json({ message: "Passenger updated" });
      }
    );
  };

  // Delete a place by ID
exports.deletePassengers = (req, res) => {
    const id = req.params.id;
    console.log(`Deleting Passenger with ID: ${id}`);
  
    db.query("DELETE FROM passengers WHERE id_passengers = ?", [id], (err, result) => {
      if (err) {
        console.log("Error deleting Passenger: ", err);
        return res.status(500).json({ error: "Database query error" });
      }
      console.log("Passengers deleted successfully", result);
      res.json({ message: "Passengers deleted" });
    });
  };