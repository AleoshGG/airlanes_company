// Import dependencies
const db = require("../config/connection.js");

// TODO: develop controllers

//Add new have
exports.addHave = (req, res) => {
    const have = req.body;

    db.query("INSERT INTO have SET ?", have, (err, result) => {
        if(err) {
            res.status(500).send("Error to insert at have");
            console.log(err);
            return;
        }
        res.status(201).send("Successfully created resource");
    });
};

//Get (Search by flight)
exports.getFlight = (req, res) => {
    const id_flight = req.params.id_flight;

    db.query("SELECT * FROM have WHERE id_flight = ?", id_flight, (err, result) => {
        if(err) {
            res.status(500).send("Error to get");
            console.log(err);
            return;
        }
        res.status(200).json(result);
    });
};

//Get (Search by planes)
exports.getPlanes = (req, res) => {
    const id_planes = req.params.id_planes;

    db.query("SELECT * FROM have WHERE id_planes = ?", id_planes, (err, result) => {
        if(err) {
            res.status(500).send("Error to get");
            console.log(err);
            return;
        }
        res.status(200).json(result);
    });
};

//Update have
exports.updateHave = (req, res) => {
    const have = req.body;
    const id_have = req.params.id_have;

    db.query("UPDATE have SET ? WHERE id_have = ?", [have, id_have], (err, result) => {
        if(err) {
            res.status(500).send("Error to update have");
            console.log(err);
            return;
        }
        res.status(200).send("Successful");
    });
};

//Delete have
exports.deleteHave = (req, res) => {
    const id_have = req.params.id_have;

    db.query("DELETE FROM have WHERE id_have = ?", id_have, (err, result) => {
        if(err) {
            res.status(500).send("Error to delete have");
            console.log(err);
            return;
        }
        res.status(200).send("Successful");
    });
};

