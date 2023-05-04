//Imports
import express from 'express';
import dotenv from 'dotenv';

import database from './database.js';

import wordRoute from "./src/routes/word.js";
import categoryRoute from './src/routes/category.js';

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
    } catch (err) {
        console.error(err.message);
        throw err;
    }
};

startServer();