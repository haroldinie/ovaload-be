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
const { getAllScores } = require("./controllers/getLeaderboardScore");
const {
  patchNewFriendByUsername,
} = require("./controllers/patchNewFriendByUsername");
const { getFriendsScores } = require("./controllers/getFriendsScores");
const cors = require("cors");
const { getChatbotMessage } = require("./controllers/getChatbotMessage");
const {
  deletePlannedExercise,
} = require("./controllers/deletePlannedExercise");

require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/chatbot/:user", getChatbotMessage);
app.get("/api/:user/exercises", getExercises);
app.get("/api/:user/:exercise", getExerciseById);
app.get("/api/:user/exercises/:date", getExercisesByDate);
app.get("/api/:user/plannedExercises/:date", getPlannedExercisesByDate);
app.get("/api/leaderboard/friends/:user", getFriendsScores);
app.post("/api/:user/exercises", postExercise);
app.post("/api/:user/plannedExercises", postPlannedExercise);
app.post("/api/:user/exercises/:exerciseName", postExerciseStats);
app.patch("/api/:user", patchNewFriendByUsername);
app.patch("/api/:user/leaderboard", patchLeaderboardScore);
app.patch(
  "/api/:user/plannedExercises/:date/:exerciseName",
  patchPlannedExercise
);
app.delete("/api/:user/plannedExercises/:date/:exerciseName", deletePlannedExercise);
// app.get("/api/leaderboard", getAllScores);

app.all("*", (req, res) => {
  res.status(404).send("Invalid Endpoint");
});

module.exports = app;
