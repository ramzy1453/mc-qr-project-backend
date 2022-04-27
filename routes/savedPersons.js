const express = require("express")
const router = express.Router()
const { addSavedPersons } = require("../controllers/savedPersons")

router.post("/add/:id", addSavedPersons)

module.exports = router