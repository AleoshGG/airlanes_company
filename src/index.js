// Import dependencies
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT;

// Import routes
const usersRouter = require("./routes/users");
const paymentsRouter = require("./routes/payments");
const placesRouter = require("./routes/places");
const planesRouter = require("./routes/planes")
const sequelize = require("./config/connection");

// Cors configuration
app.use(cors());

// Middleware to parse request bodies
app.use(bodyParser.json());

// Use routes
app.use("/users", usersRouter);
app.use("/payments", paymentsRouter);
app.use("/places", placesRouter);
app.use("/planes", planesRouter);


//Sysnc
sequelize.sync()

// Start the server
app.listen(port, () => {
  console.log(`Express server running in http://localhost:${port}`);
});