// Import dependencies
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT;
const sequelize = require("./config/connection");

// Import routes
const usersRouter = require("./routes/users.js");
const bank_dataRouter = require("./routes/bank_data.js")


// Cors configuration
app.use(cors());

// Middleware to parse request bodies
app.use(bodyParser.json());

// Use routes
app.use("/users", usersRouter);
app.use("/bankData/", bank_dataRouter);


//Sysnc
sequelize.sync()

// Start the server
app.listen(port, () => {
  console.log(`Express server running in http://localhost:${port}`);
});
