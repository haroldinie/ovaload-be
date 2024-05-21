const express = require("express")
const {getExercises} = require("./controllers/getExercises")
const {getExercisesByDate} = require("./controllers/getExercisesByDate")
const {postPlannedExercise} = require("./controllers/postPlannedExercise")  
const Model = require("./models/user")

const app = express()

app.use(express.json())

app.get("/api/:user/exercises", getExercises)
app.get("/api/:user/exercises/:date",getExercisesByDate)

app.post("/api/:user/plannedExercises",postPlannedExercise)

module.exports = app

