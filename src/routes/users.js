// Import dependencies
const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");

// URLs
router.post("/add", usersController.addUser);

module.exports = router;
