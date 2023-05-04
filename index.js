import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;

const app = express();

app.use(cors({
    credentials: true
}));
app.use(express.json());

app.listen(PORT, () => console.log(`Langapp listening on port ${PORT}!`));

mongoose.connect(MONGODB_URL)
    .then(() => {
        console.log("Database connected.");
    }).catch((err) => {
        console.log(err.message);
        throw err;
    });

import wordRoute from './src/routes/word.js';
import categoryRoute from './src/routes/category.js';

app.use("/api/word", wordRoute);
app.use("/api/category", categoryRoute);