const express = require("express");
const { getExercises } = require("./controllers/getExercises");
const { getExerciseById } = require("./controllers/getExerciseById");
const { getExercisesByDate } = require("./controllers/getExercisesByDate");
const { postPlannedExercise } = require("./controllers/postPlannedExercise");
const { patchPlannedExercise } = require("./controllers/patchPlannedExercise");

const { postExercise } = require("./controllers/postExercise");
const { postExerciseStats } = require("./controllers/postExerciseStats");
const {
  getPlannedExercisesByDate,
} = require("./controllers/getPlannedExercisesByDate");
const {
  patchLeaderboardScore,
} = require("./controllers/patchLeaderboardScore");
const {
  getAllScores
} = require("./controllers/getLeaderboardScore");
const { patchNewFriendByUsername } = require("./controllers/patchNewFriendByUsername")

require("dotenv").config();
const app = express();

app.use(express.json());

app.get("/api/:user/exercises", getExercises);
app.post("/api/:user/exercises", postExercise);

app.get("/api/:user/:exercise", getExerciseById);
app.get("/api/:user/exercises/:date", getExercisesByDate);

app.get("/api/:user/plannedExercises/:date", getPlannedExercisesByDate);
app.post("/api/:user/plannedExercises", postPlannedExercise);
app.patch(
  "/api/:user/plannedExercises/:date/:exerciseName",
  patchPlannedExercise
);

app.post("/api/:user/exercises/:exerciseName", postExerciseStats);

app.patch("/api/:user", patchNewFriendByUsername)

app.patch("/api/:user/leaderboard", patchLeaderboardScore);
app.get("/api/leaderboard", getAllScores);

app.all("*", (req, res) => {
  res.status(404).send("Invalid Endpoint");
});


module.exports = app;
