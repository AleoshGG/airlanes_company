// Import dependencies
const db = require("../config/connection");

// TODO: Develop controllers
// Get all places
exports.getPlaces = (req, res) => {
  console.log("Request received for fetching places");

  db.query("SELECT * FROM places", (err, results) => {
    if (err) {
      console.log("Database query error: ", err);
      return res.status(500).json({ error: "Database query error" });
    }
    console.log("Places fetched successfully", results);
    res.json(results);
  });
};

// Get a single place by ID
exports.getPlaceById = (req, res) => {
  const id = req.params.id;
  console.log(`Fetching place with ID: ${id}`);

  db.query("SELECT * FROM places WHERE id_place = ?", [id], (err, result) => {
    if (err) {
      console.log("Error fetching place by ID: ", err);
      return res.status(500).json({ error: "Database query error" });
    }
    console.log("Place fetched successfully", result);
    res.json(result[0]);
  });
};

// Create a new place
exports.createPlace = (req, res) => {
  const { country, state, airport_name } = req.body;
  console.log("Creating a new place");

  db.query(
    "INSERT INTO places (country, state, airport_name) VALUES (?, ?, ?)",
    [country, state, airport_name],
    (err, result) => {
      if (err) {
        console.log("Error creating new place: ", err);
        return res.status(500).json({ error: "Database query error" });
      }
      console.log("Place created successfully", result);
      res.json({ id: result.insertId });
    }
  );
};

// Update a place by ID
exports.updatePlace = (req, res) => {
  const id = req.params.id;
  const { country, state, airport_name } = req.body;
  console.log(`Updating place with ID: ${id}`);

  db.query(
    "UPDATE places SET country = ?, state = ?, airport_name = ? WHERE id_place = ?",
    [country, state, airport_name, id],
    (err, result) => {
      if (err) {
        console.log("Error updating place: ", err);
        return res.status(500).json({ error: "Database query error" });
      }
      console.log("Place updated successfully", result);
      res.json({ message: "Place updated" });
    }
  );
};

// Delete a place by ID
exports.deletePlace = (req, res) => {
  const id = req.params.id;
  console.log(`Deleting place with ID: ${id}`);

  db.query("DELETE FROM places WHERE id_place = ?", [id], (err, result) => {
    if (err) {
      console.log("Error deleting place: ", err);
      return res.status(500).json({ error: "Database query error" });
    }
    console.log("Place deleted successfully", result);
    res.json({ message: "Place deleted" });
  });
};