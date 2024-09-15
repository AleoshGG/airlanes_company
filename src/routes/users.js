// Import dependencies
const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.js");

// URLs
router.post("/add", usersController.addUser);
router.get("/", usersController.getAllUser);
router.put("/update/:id", usersController.updateUser);
router.delete("/delete/:id", usersController.deleteUser);

module.exports = router;
