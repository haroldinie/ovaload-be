const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  exerciseName: { type: String, lowercase: true },
  exerciseType: { type: String, lowercase: true },
  exerciseStats: [
    {
      weightKg: {
        type: Number,
        max: 500,
      },
      sets: {
        type: Number,
        min: 1,
        max: 5,
      },
      reps: {
        type: Number,
        min: 1,
        max: 15,
      },
      distanceKm: {
        type: Number,
        min: 1,
        max: 100,
      },
      timeMin: {
        type: Number,
        min: 1,
        max: 180,
      },
      createdAt: {
        type: Date,
        default: () => Date.now(),
      },
    },
  ],
});

const plannedExerciseSchema = new mongoose.Schema({
  exerciseName: { type: String, lowercase: true },
  exerciseType: { type: String, lowercase: true },
  nextChallenge: [
    {
      weightKg: {
        type: Number,
        max: 500,
      },
      sets: {
        type: Number,
        min: 3,
        max: 5,
      },
      reps: {
        type: Number,
        min: 6,
        max: 14,
      },
      distanceKm: {
        type: Number,
        min: 1,
        max: 100,
      },
      timeMin: {
        type: Number,
        min: 1,
        max: 180,
      },
    },
  ],
  createdFor: { type: Date },
  completed: { type: Boolean }
});

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  friends: [String],
  exercises: [exerciseSchema],
  plannedExercise: [plannedExerciseSchema],
  score: {type: Number,  default: 0},
});

/*
exercises = [ { squats, [{kg, sets, reps, date}, {kg, sets, reps, date}] , }  , {pull ups ... }]
*/

module.exports = mongoose.model("User", userSchema);
