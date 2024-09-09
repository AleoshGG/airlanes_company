// Import dependencies
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT;

// Import routes
const usersRouter = require("./routes/users");
const passengersRouter = require("./routes/passengers");

// Cors configuration
app.use(cors());

// Middleware to parse request bodies
app.use(bodyParser.json());

// Use routes
app.use("/users", usersRouter);
app.use("/passengers", passengersRouter)

// Start the server
app.listen(port, () => {
  console.log(`Express server running in http://localhost:${port}`);
});
