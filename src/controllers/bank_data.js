// Import dependencies
const db = require("../config/connection.js");

// TODO: develop controllers

//Add new bank-data
exports.addBankData = (req, res) => {
    const bank_data = req.body;

    db.query("INSERT INTO bank_data SET ?", bank_data, (err, result) => {
        if(err) {
            res.status(500).send("Error to insert bank-data");
            console.log(err);
            return;
        }
        res.status(201).send("Successfully created resource");
    });
};

//Get bank-data
exports.getBankData = (req, res) => {
    const id_user = req.params.id_user;

    db.query("SELECT account_number, expiration_date, id_bank_data FROM bank_data WHERE id_user = ?", id_user, (err, result) => {
        if(err) {
            res.status(500).send("Error to get bank-data");
            console.log(err);
            return;
        }
        res.status(200).json(result);
    });
};

//Update bank_data
exports.updateBankData = (req, res) => {
    const bank_data = req.body;
    const id_bank_data = req.params.id_bank_data;

    db.query("UPDATE bank_data SET ? WHERE id_bank_data = ?", [bank_data, id_bank_data], (err, result) => {
        if(err) {
            res.status(500).send("Error to update bank-data");
            console.log(err);
            return;
        }
        res.status(200).send("Successful");
    });
};

//Delete bank_data
exports.deleteBankData = (req, res) => {
    const id_bank_data = req.params.id_bank_data;
    const id_user = req.params.id_user;

db.query("DELETE FROM bank_data WHERE id_bank_data = ? AND id_user = ?", [id_bank_data, id_user], (err, result) => {
        if(err) {
            res.status(500).send("Error to delete bank-data");
            console.log(err);
            return;
        }
        res.status(200).send("Successful");
    });
};

