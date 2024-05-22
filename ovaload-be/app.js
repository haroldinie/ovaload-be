const express = require("express")
const {getExercises} = require("./controllers/getExercises")
const Model = require("./models/user")
const {postExercise} = require("./controllers/postExercise")
const {postExerciseStats} = require("./controllers/postExerciseStats")

const app = express()

app.use(express.json())

app.get("/api/:user/exercises", getExercises)

app.post("/api/:user/exercises", postExercise)

app.post("/api/:user/exercises/:exerciseName", postExerciseStats)

module.exports = app


