// Import dependencies
const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.js");

// URLs
router.get("/", usersController.message);

module.exports = router;
