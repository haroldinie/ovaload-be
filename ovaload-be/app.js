const express = require("express")
const {getExercises} = require("./controllers/getExercises")
const Model = require("./models/user")

const app = express()

app.use(express.json())

app.get("/api/:user/exercises", getExercises)

module.exports = app

