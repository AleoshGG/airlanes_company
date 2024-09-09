// Import dependencies
const db = require("../config/connection");

// TODO: Develop controllers
// Get all payments
exports.getPayments = (req, res) => {
  console.log("Request received for fetching payments");

  db.query("SELECT * FROM payments", (err, results) => {
    if (err) {
      console.log("Database query error: ", err);
      return res.status(500).json({ error: "Database query error" });
    }
    console.log("Payments fetched successfully", results);
    res.json(results);
  });
};

// Get a single payment by ID
exports.getPaymentById = (req, res) => {
  const id = req.params.id;
  console.log(`Fetching payment with ID: ${id}`);

  db.query("SELECT * FROM payments WHERE id_payment = ?", [id], (err, result) => {
    if (err) {
      console.log("Error fetching payment by ID: ", err);
      return res.status(500).json({ error: "Database query error" });
    }
    console.log("Payment fetched successfully", result);
    res.json(result[0]);
  });
};

// Create a new payment
exports.createPayment = (req, res) => {
  const { amount, date, id_reservation } = req.body;
  console.log("Creating a new payment");

  db.query(
    "INSERT INTO payments (amount, date, id_reservation) VALUES (?, ?, ?)",
    [amount, date, id_reservation],
    (err, result) => {
      if (err) {
        console.log("Error creating new payment: ", err);
        return res.status(500).json({ error: "Database query error" });
      }
      console.log("Payment created successfully", result);
      res.json({ id: result.insertId });
    }
  );
};

// Update a payment by ID
exports.updatePayment = (req, res) => {
  const id = req.params.id;
  const { amount, date, id_reservation } = req.body;
  console.log(`Updating payment with ID: ${id}`);

  db.query(
    "UPDATE payments SET amount = ?, date = ?, id_reservation = ? WHERE id_payment = ?",
    [amount, date, id_reservation, id],
    (err, result) => {
      if (err) {
        console.log("Error updating payment: ", err);
        return res.status(500).json({ error: "Database query error" });
      }
      console.log("Payment updated successfully", result);
      res.json({ message: "Payment updated" });
    }
  );
};

// Delete a payment by ID
exports.deletePayment = (req, res) => {
  const id = req.params.id;
  console.log(`Deleting payment with ID: ${id}`);

  db.query("DELETE FROM payments WHERE id_payment = ?", [id], (err, result) => {
    if (err) {
      console.log("Error deleting payment: ", err);
      return res.status(500).json({ error: "Database query error" });
    }
    console.log("Payment deleted successfully", result);
    res.json({ message: "Payment deleted" });
  });
};
