const Hero = require("../models/hero")

exports.addHero = async(request, response) => {

        try {
            delete request.body._id
            const heroObject = { id: Hero.length + 1, ...request.body }
            const isExist = await Hero.find({...request.body });
            console.log(isExist.length)
            if (isExist.length === 0) {
                //can add
                const hero = new Hero(heroObject)
                hero.save()
                console.log('done hbb')
            } else {
                console.log("deja existant hh")
            }
        } catch {
            console.log('nn mkch kifeh hbb');
        }

    }
    /*****************read******************* */
exports.getAllHeros = async(request, response) => {

    try {
        const allHeros = await Hero.find({});
        response.send(allHeros)

    } catch {
        console.log('nn hbb')
    }
}

exports.getHeroById = async(request, response) => {

    try {
        const hero = await Hero.find({ id: parseInt(request.params.id) })
        if (!hero) {
            console.log('hero not found')
        } else {
            console.log(hero)
            response.send(hero)
        }
    } catch (error) {
        console.log('error')
        response.send({ error })
    }
}
exports.getHeroByName = async(request, response) => {
    try {
        const hero = await Hero.find({ name: request.params.name })
        if (!hero) {
            console.log('hero not found')
        } else {
            console.log(hero)
            response.send(hero)
        }
    } catch (error) {
        console.log('error')
        response.send({ error })
    }
}
exports.getHeroByStrength = async(request, response) => {
    try {
        const hero = await Hero.find({ strength: parseInt(request.params.strength) })
        if (!hero) {
            console.log('hero not found')
        } else {
            console.log(hero)
            response.send(hero)
        }
    } catch (error) {
        console.log('error')
        response.send({ error })
    }
}
exports.getHeroBySpeed = async(request, response) => {
    try {
        const hero = await Hero.find({ speed: parseInt(request.params.speed) })
        if (!hero) {
            console.log('hero not found')
        } else {
            console.log(hero)
            response.send(hero)
        }
    } catch (error) {
        console.log('error')
        response.send({ error })
    }
}
exports.getHeroByIntelligence = async(request, response) => {
    try {
        const hero = await Hero.find({ intelligence: parseInt(request.params.intelligence) })
        if (!hero) {
            console.log('hero not found')
        } else {
            console.log(hero)
            response.send(hero)
        }
    } catch (error) {
        console.log('error')
        response.send({ error })
    }

}
exports.getHeroByGender = async(request, response) => {
        try {
            const hero = await Hero.find({ gender: request.params.gender })
            if (!hero) {
                console.log('hero not found')
            } else {
                console.log(hero)
                response.send(hero)
            }
        } catch (error) {
            console.log('error')
            response.send({ error })
        }

    }
    /******************update********************* */
exports.updateHeroById = async(request, response) => {
    delete request.body._id
    const hero = await Hero.findOneAndUpdate({ id: parseInt(request.params.id) }, {...request.body })
    if (hero) {
        console.log('updated ' + hero.name + ' with succes')
        response.send(hero)
    } else {
        console.log('il nexiste pas')
        response.status(404).send({ error: "this hero don't exist" })
    }
}
exports.updateHeroByName = async(request, response) => {
    delete request.body._id
    const hero = await Hero.findOneAndUpdate({ name: request.params.name }, {...request.body })
    if (hero) {
        console.log('updated ' + hero.name + ' with succes')
        response.send(hero)
    } else {
        console.log('il nexiste pas')
        response.status(404).send({ error: "this hero don't exist" })
    }
}

/****************delete */
exports.deleteHeroById = async(request, response) => {
    try {
        const hero = await Hero.deleteOne({ id: parseInt(request.params.id) })
        response.send({ message: "delete with succes" })
        console.log('delete with succes.')
    } catch (error) {
        console.log('error')
        response.send({ error })
    }
}
exports.deleteHeroByName = async(request, response) => {
    try {
        await Hero.deleteOne({ name: request.params.name })
        response.send({ message: "delete with succes" })
        console.log('delete with succes.')
    } catch (error) {
        console.log('error')
        response.send({ error })
    }
}