const mongoose = require("mongoose")

const SavedPersonsSchema = new mongoose.Schema({

    idSaver: {
        type: Number,
        required: true
    },
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
})

module.exports = mongoose.model('SavedPersons', SavedPersonsSchema)