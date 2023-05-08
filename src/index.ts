import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes/router';

const PORT = process.env.PORT!;
const MONGODB_URL = process.env.MONGODB_URL!;

const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

mongoose.connect(MONGODB_URL)
    .then(() => {
        console.log("Database connected.");
    }).catch((err: Error) => {
        console.log(err.message);
        throw err;
    })

app.use('/', router());