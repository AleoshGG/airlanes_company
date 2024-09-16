// Import dependencies
const express = require("express");
const router = express.Router();
const users = require("../controllers/users.js");

// URLs
router.post("/add", users.addUser);
router.put("/update/:id", users.updateUser);
router.delete("/delete/:id", users.deleteUser);

module.exports = router;