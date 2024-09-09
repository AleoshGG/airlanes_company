// Import dependencies
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT;

// Import routes
const paymentsRouter = require("./routes/payments");
const placesRouter = require("./routes/places");
const planesRouter = require("./routes/planes");
const reservationsRouter = require("./routes/reservations.js");
const haveRouter = require("./routes/have.js");
const usersRouter = require("./routes/users.js");
const bank_data = require("./routes/bank_data.js");

// Cors configuration
app.use(cors());

// Middleware to parse request bodies
app.use(bodyParser.json());

// Use routes
app.use("/users", usersRouter);
app.use("/payments", paymentsRouter);
app.use("/places", placesRouter);
app.use("/planes", planesRouter);
app.use("/reservations", reservationsRouter);
app.use("/have", haveRouter);
app.use("/bank_data", bank_data);

// Start the server
app.listen(port, () => {
  console.log(`Express server running in http://localhost:${port}`);
});
