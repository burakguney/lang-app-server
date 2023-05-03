//Imports
const express = require('express');
const database = require('./database');
const dotenv = require('dotenv');

const wordRoute = require("./src/routes/word");
const categoryRoute = require('./src/routes/category');

const startServer = () => {
    try {
        dotenv.config();
        const PORT = process.env.PORT;

        // Create the Express server
        const app = express();
        app.use(express.json());

        //Route use
        app.use("/api/word", wordRoute);
        app.use("/api/category", categoryRoute);

        // Connect to the MongoDB database
        database();

        // Start the server
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    } catch (error) {
        console.error(error.message);
        throw error;
    }
};

startServer();