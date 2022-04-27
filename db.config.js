const mongoose = require('mongoose');

exports.connect = () => mongoose.connect(
        process.env.mongodb_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then((value) => {
        console.log('connected');
    })
    .catch((reason) => {
        console.log('hh nn');
    })