const seed = require("../db/seeds/seed");
const request = require("supertest");
const connectDB = require("../db/connection");
const mongoose = require("mongoose");
const app = require("../app");
const User = require("../models/user");

beforeAll(async () => {
  await connectDB();
  await seed();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("/api/:user/:exercise", () => {
  test("GET 200: Returns exercise for given exercise id", () => {
    const output = {
      reps: expect.any(Number),
      sets: expect.any(Number),
      weightKg: expect.any(Number),
    };
    return request(app)
      .get("/api/jimratty/bench-press")
      .expect(200)
      .then((response) => {
        const { exercise } = response.body;
        expect(exercise.exerciseName).toBe("bench-press");
        exercise.exerciseStats.map((obj) => {
          expect(obj).toMatchObject(output);
        });
      });
  });
});

describe("/api/:user/plannedExercises/:date", () => {
  test("DELETE planned exercise by date", () => {
    return request(app)
      .delete("/api/sarahw/plannedExercises/2024-05-12")
      .expect(204)
      .then((response) => {
        expect(response.body).toEqual({});
      });
  });
});
