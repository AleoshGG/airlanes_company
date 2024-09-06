// Import dependencies
const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");

// URLs
router.get("/", usersController.message);

module.exports = router;
