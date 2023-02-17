const express = require("express")
const router = express.Router();
const userSchema = require("../models/user")

//create user

router.post('/teams', (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//get all users

router.get('/teams', (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//get a user
 
router.get('/teams/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// update a user 

router.put('/teams/:id', (req, res) => {
    const { id } = req.params;
    const { name, apodo, fundacion, socios, presidente, ubicacion, estadio, escudo, titulos, equipacion } = req.body
    userSchema
        .updateOne({ _id: id }, { $set: {name, apodo, fundacion, socios, presidente, ubicacion, estadio, escudo, titulos, equipacion} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//delete a user

router.delete('/teams/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;