const mongoose = require("mongoose")

const heroSchema = new mongoose.Schema({

    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    strength: {
        type: Number,
        required: true
    },
    speed: {
        type: Number,
        required: true
    },
    intelligence: {
        type: Number,
        required: true
    },
    savedPersons: [{
        ref: "savedPersons",
        type: mongoose.Types.ObjectId,
        required: true
    }]
})

module.exports = mongoose.model('Hero', heroSchema)