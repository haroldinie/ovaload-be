const express = require("express");
const { getExercises } = require("./controllers/getExercises");
const { getExerciseById } = require("./controllers/getExerciseById");
const Model = require("./models/user");

const app = express();

app.use(express.json());

app.get("/api/:user/exercises", getExercises);

app.get("/api/:user/exercises/:exercise", getExerciseById);

module.exports = app;
