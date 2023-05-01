/* MONGODB */
const mongoose = require('mongoose');

mongoose.Promise = Promise;

mongoose.connect('mongodb://127.0.0.1:27017/lang-app', {
    useNewUrlParser: true,
    useCreateIndex: true,
})
    .then(() => console.log('MongoDB Connection Succeeded.'))
    .catch(error => console.log('Error in DB connection: ' + error))
/* MONGODB */

const express = require('express');

const app = express();
app.use(express.json());





const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))