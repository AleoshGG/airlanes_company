// Import dependencies
const db = require("../config/connection");


// Get all planes
exports.getPlanes = (req, res) => {
  console.log("Request received for fetching planes");

  db.query("SELECT * FROM planes", (err, results) => {
    if (err) {
      console.log("Database query error: ", err);
      return res.status(500).json({ error: "Database query error" });
    }
    console.log("Planes fetched successfully", results);
    res.json(results);
  });
};

// Get a single plane by ID
exports.getPlaneById = (req, res) => {
  const id = req.params.id;
  console.log(`Fetching plane with ID: ${id}`);

  db.query("SELECT * FROM planes WHERE id_planes = ?", [id], (err, result) => {
    if (err) {
      console.log("Error fetching plane by ID: ", err);
      return res.status(500).json({ error: "Database query error" });
    }
    console.log("Plane fetched successfully", result);
    res.json(result[0]);
  });
};

// Create a new plane
exports.createPlane = (req, res) => {
  const { model, number_seats, load_capacity } = req.body;
  console.log("Creating a new plane");

  db.query(
    "INSERT INTO planes (model, number_seats, load_capacity) VALUES (?, ?, ?)",
    [model, number_seats, load_capacity],
    (err, result) => {
      if (err) {
        console.log("Error creating new plane: ", err);
        return res.status(500).json({ error: "Database query error" });
      }
      console.log("Plane created successfully", result);
      res.json({ id: result.insertId });
    }
  );
};

// Update a plane by ID
exports.updatePlane = (req, res) => {
  const id = req.params.id;
  const { model, number_seats, load_capacity } = req.body;
  console.log(`Updating plane with ID: ${id}`);

  db.query(
    "UPDATE planes SET model = ?, number_seats = ?, load_capacity = ? WHERE id_planes = ?",
    [model, number_seats, load_capacity, id],
    (err, result) => {
      if (err) {
        console.log("Error updating plane: ", err);
        return res.status(500).json({ error: "Database query error" });
      }
      console.log("Plane updated successfully", result);
      res.json({ message: "Plane updated" });
    }
  );
};

// Delete a plane by ID
exports.deletePlane = (req, res) => {
  const id = req.params.id;
  console.log(`Deleting plane with ID: ${id}`);

  db.query("DELETE FROM planes WHERE id_planes = ?", [id], (err, result) => {
    if (err) {
      console.log("Error deleting plane: ", err);
      return res.status(500).json({ error: "Database query error" });
    }
    console.log("Plane deleted successfully", result);
    res.json({ message: "Plane deleted" });
  });
};