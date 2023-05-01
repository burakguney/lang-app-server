const dbInitializer = require('./db');
dbInitializer();
/* ----------------------------------- */


const express = require('express');

const app = express();
app.use(express.json());

const wordRoute = require("./src/routes/wordRoute");
app.use("/api/word", wordRoute);

const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))