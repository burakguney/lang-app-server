/* MONGODB */
const mongoose = require('mongoose');

const config = () => {
    mongoose.Promise = Promise;

    mongoose.connect('mongodb://127.0.0.1:27017/lang-app', {
        useNewUrlParser: true
    })
        .then(() => console.log('MongoDB Connection Succeeded.'))
        .catch(error => console.log('Error in DB connection: ' + error))
}

module.exports = config;
/* MONGODB */