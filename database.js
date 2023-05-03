import mongoose from 'mongoose';

const database = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true
    }).then(() => {
        console.log("Database connected.");
    }).catch((err) => {
        console.log(err.message);
        throw err;
    })
}

export default database;