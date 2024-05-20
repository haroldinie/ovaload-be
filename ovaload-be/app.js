const express = require("express")

const Model = require("./models/user")

const app = express()

app.use(express.json())

app.get("/api/exercise", (req, res)=>{
    console.log("hello from the app");

})

module.exports = app

