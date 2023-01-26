const express = require("express");
const { PORT } = require("../config");
const properties = require("../properties.json")

const app = express();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    next();
});

app.get('/dummyData', (req, res) => {
    res.send(properties);
});

app.listen(PORT, () => {
    console.log(`App Is Listening on PORT ${PORT}`)
});