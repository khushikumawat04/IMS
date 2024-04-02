const express = require('express')
const mongoose = require('mongoose')
const port = 5000;
const app = express()

mongoose.connect("mongodb://127.0.0.1:27017/meet01")
.then(() => console.log("data base is connected")).catch((err) => console.log(err));

app.listen(port, () => {
    console.log(`Server is Running ${port}`)
});