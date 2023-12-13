const Snack = require("../models/snack.js");

async function index (req, res) {
    try {
        const snacks = await Snack.find({}).sort({createdAt: -1});
        res.status(200).json(snacks);
    } catch (err) {
        res.status(500).json({"error": err.message})
    }
}

async function show (req, res) {
    try {
        const id = req.params.id;
        const snack = await Snack.findById(id);
        res.status(200).json(snack);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
}


async function create (req, res) {              //still bugged
    try {
        const { name , description } = req.body
        const snack = await Snack.create({name, description});
        res.status(201).json(snack);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
}


async function update (req, res) {
    try {
        const id = req.params.id;
        const { description } = req.body;
        const snack = await Snack.findByIdAndUpdate(id, {
            description
        },{ new: true });
        res.status(200).json(snack);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
}

async function destroy (req, res) {
    try {
        const id = req.params.id;
        const snack = await Snack.findByIdAndDelete(id);
        res.sendStatus(204);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
}

module.exports = {
    index, show, update, create, destroy
}
