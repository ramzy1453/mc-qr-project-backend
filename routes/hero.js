const express = require("express")
const router = express.Router()
const {
    addHero,
    getHeroById,
    getAllHeros,
    getHeroByName,
    getHeroByGender,
    getHeroByIntelligence,
    getHeroBySpeed,
    getHeroByStrength,
    updateHeroById,
    updateHeroByName,
    deleteHeroById,
    deleteHeroByName
} = require("../controllers/hero")

router.get("/all", getAllHeros)
router.get("/id/:id", getHeroById)
router.get("/name/:name", getHeroByName)
router.get("/gender/:gender", getHeroByGender)
router.get("/intelligence/:intelligence", getHeroByIntelligence)
router.get("/speed/:speed", getHeroBySpeed)
router.get("/strength/:strength", getHeroByStrength)

router.put("/id/:id", updateHeroById)
router.put("/name/:name", updateHeroByName)

router.delete("/id/:id", deleteHeroById)
router.delete("/name/:name", deleteHeroByName)

router.post("/add", addHero)

module.exports = router