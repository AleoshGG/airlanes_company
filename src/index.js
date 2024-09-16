// Import dependencies
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT;
const sequelize = require("./config/connection.js");

// Import routes
const paymentsRouter = require("./routes/payments");
const placesRouter = require("./routes/places");
const planesRouter = require("./routes/planes")
const usersRouter = require("./routes/users.js");
const bank_dataRouter = require("./routes/bank_data.js");
const ticketsRouter = require("./routes/tickets.js");
const reservationsRouter = require("./routes/reservations.js");

// Cors configuration
app.use(cors());

// Middleware to parse request bodies
app.use(bodyParser.json());

// Use routes
app.use("/users", usersRouter);
app.use("/payments", paymentsRouter);
app.use("/places", placesRouter);
app.use("/planes", planesRouter);
app.use("/bankData", bank_dataRouter);
app.use("/tickets", ticketsRouter);
app.use("/reservations", reservationsRouter);

//Sysnc EJECUTARLO SOLO UNA VEZ
//sequelize.sync();

// Start the server
app.listen(port, () => {
  console.log(`Express server running in http://localhost:${port}`);
});