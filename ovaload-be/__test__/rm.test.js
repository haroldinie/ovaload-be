const data = require("../db/data/test-data/users");
const seed = require("../db/seeds/seed");
const request = require("supertest");
const connectDB = require("../db/connection");
const mongoose = require("mongoose");
const app = require("../app");

describe("/api/:user/exercises/:exercise", () => {
  test("GET 200: Returns exercise for given exercise id", () => {
    const output = [
      { weightKg: 80, sets: 3, reps: 10 },
      { weightKg: 85, sets: 3, reps: 8 },
    ];
    return request(app)
      .get("/api/jimratty/exercises/bench-press")
      .expect(200)
      .then((response) => {
        console.log("response --->", response);
        expect(exerciseName).toBe("Bench Press");
        expect(exerciseStats).toEqual(output);
      });
  });
});
