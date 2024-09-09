// Import dependencies
const db = require("../config/connection.js");

// TODO: develop controllers

//Add new reservation
exports.addReservation = (req, res) => {
    const reservation = req.body;

    db.query("INSERT INTO reservation SET ?", reservation, (err, result) => {
        if(err) {
            res.status(500).send("Error to insert reservation");
            console.log(err);
            return;
        }
        res.status(201).send("Successfully created resource");
    });
};

//Get all reservations
exports.getReservation = (req, res) => {
    const id_user = req.params.id_user;
    const status = req.params.status;

    db.query("SELECT id_reservation, date, status, date, id_fligth FROM reservations WHERE id_user = ? AND status = ?", [id_user, status], (err, result) => {
        if(err) {
            res.status(500).send("Error to get all reservations");
            console.log(err);
            return;
        }
        res.status(200).json(result);
    });
};

//Update reservations
exports.updateReservation = (req, res) => {
    const reservation = req.body;
    const id_reservation = req.params.id_reservation;

    db.query("UPDATE reservations SET ? WHERE id_reservation = ?", [reservation, id_reservation], (err, result) => {
        if(err) {
            res.status(500).send("Error to update reservation");
            console.log(err);
            return;
        }
        res.status(200).send("Successful");
    });
};

//Delete reservation
exports.deleteReservation = (req, res) => {
    const id_reservation = req.params.id_reservation;

    db.query("DELETE FORM reservations WHERE id_reservation = ?", id_reservation, (err, result) => {
        if(err) {
            res.status(500).send("Error to delete reservation");
            console.log(err);
            return;
        }
        res.status(200).send("Successful");
    });
};

