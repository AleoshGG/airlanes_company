// Import dependencies
const db = require("../config/connection.js");

// TODO: develop controllers

//Add new user
exports.addUser = (req, res) => {
    const user = req.body;

    db.query("INSERT INTO users SET ?", user, (err, result) => {
        if(err) {
            res.status(500).send("Error to insert user");
            console.log(err);
            return;
        }
        res.status(201).send("Successfully created resource");
    });
};

//Get user
exports.getUser = (req, res) => {
    const id_user = req.params.id;

    db.query("SELECT first_name, last_name, email, phone_number FROM users WHERE id_user = ?", id_user, (err, result) => {
        if(err) {
            res.status(500).send("Error to get user");
            console.log(err);
            return;
        }
        res.status(200).json(result);
    });
};

//Update user
exports.updateUser = (req, res) => {
    const user = req.body;
    const id_user = req.params.id;

    db.query("UPDATE users SET ? WHERE id_user = ?", [user, id_user], (err, result) => {
        if(err) {
            res.status(500).send("Error to update user");
            console.log(err);
            return;
        }
        res.status(200).send("Successful");
    });
};

//Delete user
exports.deleteUser = (req, res) => {
    const id_user = req.params.id;

    db.query("DELETE FROM users WHERE id_user = ?", id_user, (err, result) => {
        if(err) {
            res.status(500).send("Error to delete user");
            console.log(err);
            return;
        }
        res.status(200).send("Successful");
    });
};