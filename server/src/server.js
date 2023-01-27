const express = require("express");
const properties = require("../properties.json")

const PORT = 1000;

const app = express();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://re-mngmnt-frnt.herokuapp.com/");
    next();
});

app.get('/dummyData', (req, res) => {
    res.send(properties);
});

app.listen(PORT, () => {
    console.log(`App Is Listening on PORT ${PORT}`)
});