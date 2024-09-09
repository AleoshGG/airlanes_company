// Import dependencies
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT;

// Import routes
const usersRouter = require("./routes/users");
const reservationsRouter = require("./routes/reservations.js");
const haveRouter = require("./routes/have.js");

// Cors configuration
app.use(cors());

// Middleware to parse request bodies
app.use(bodyParser.json());

// Use routes
app.use("/users", usersRouter);
app.use("/reservations", reservationsRouter);
app.use("/have", haveRouter);

// Start the server
app.listen(port, () => {
  console.log(`Express server running in http://localhost:${port}`);
});
