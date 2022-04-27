const SavedPersons = require("../models/savedPersons")
const Hero = require("../models/hero")


exports.addSavedPersons = async(request, response) => {
    try {
        delete request.body._id
        console.log({ idSaver: parseInt(request.params.id), ...request.body })
        const savedPersons = new SavedPersons({ idSaver: parseInt(request.params.id), ...request.body });
        await savedPersons.save();
        console.log(savedPersons);
        const hero = await Hero.findOneAndUpdate({ id: parseInt(request.params.id) }, { $push: { savedPersons: [savedPersons._id] } }, { new: true })
        response.send({ hero, savedPersons });

    } catch (error) {
        response.status(400).json({ error });
    }
};