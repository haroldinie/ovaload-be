const express = require("express")
const {getExercises} = require("./controllers/getExercises")
const {getExercisesByDate} = require("./controllers/getExercisesByDate")  
const Model = require("./models/user")

const app = express()

app.use(express.json())

app.get("/api/:user/exercises", getExercises)
app.get("/api/:user/:date/exercises",getExercisesByDate)

module.exports = app

