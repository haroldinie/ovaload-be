const seed = require("../db/seeds/seed");
const request = require("supertest");
const connectDB = require("../db/connection");
const mongoose = require("mongoose");
const app = require("../app");

beforeAll(async () => {
  await connectDB();
});

beforeEach(async () => {
  await seed();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe.only("/api/:user/:exercise", () => {
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
