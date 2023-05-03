const mongoose = require('mongoose');

const database = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true
    }).then(() => {
        console.log("Database connected.");
    }).catch((err) => {
        console.log("Database not connected.");
        throw err;
    })
}

module.exports = database;