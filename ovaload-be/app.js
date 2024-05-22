const express = require("express")
const { getExercises } = require("./controllers/getExercises")
const { getExerciseById } = require("./controllers/getExerciseById")
const {getExercisesByDate} = require("./controllers/getExercisesByDate")
const {postPlannedExercise} = require("./controllers/postPlannedExercise")  
const Model = require("./models/user")
const {postExercise} = require("./controllers/postExercise")
const {postExerciseStats} = require("./controllers/postExerciseStats")

const app = express()

app.use(express.json())

app.get("/api/:user/exercises", getExercises)
app.get("/api/:user/:exercise", getExerciseById);
app.get("/api/:user/exercises/:date",getExercisesByDate)
app.post("/api/:user/plannedExercises",postPlannedExercise)

app.post("/api/:user/exercises", postExercise)

app.post("/api/:user/exercises/:exerciseName", postExerciseStats)

module.exports = app


