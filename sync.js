// Import models
const sequelize = require("./src/config/connection.js");

const Assignments = require("./src/models/assignment.js");
const Bank_Data = require("./src/models/bank_data.js");
const Flights = require("./src/models/flights.js");
const Passengers = require("./src/models/passengers.js");
const Payments = require("./src/models/payment.js");
const Places = require("./src/models/places.js");
const Planes = require("./src/models/planes.js");
const Reservations = require("./src/models/reservation.js");
const Tickets = require("./src/models/ticket.js");
const Users = require("./src/models/user.js");

// Order to create
sequelize.sync().then(() => {
  Users.sync();
  Bank_Data.sync();
  Passengers.sync();
  Places.sync();
  Planes.sync();
  Flights.sync();
  Reservations.sync();
  Payments.sync();
  Tickets.sync();
  Assignments.sync();
});
