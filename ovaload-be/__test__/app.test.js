const data = require("../db/data/test-data/users");
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

describe("/api/:user/exercises", () => {
  test("GET 200: Returns all exercises for given user.", () => {
    const example = {
      exerciseName: expect.any(String),
      exerciseStats: expect.any(Array),
      _id: expect.any(String),
    };
    return request(app)
      .get("/api/jimratty/exercises")
      .expect(200)
      .then((response) => {
        const { exercises } = response.body;
        expect(exercises.length).toBe(2);
        exercises.map((exercise) => {
          expect(exercise).toMatchObject(example);
        });
      });
  });

  test("GET 404: Returns error if no exercises found.", () => {
    return request(app)
      .get("/api/emilynorth/exercises")
      .expect(404)
      .then((response) => {
        expect(response.body.message).toBe("No exercises found");
      });
  });
});

describe("/api/:user/exercises/:exercise", () => {
  test("GET 200: Returns exercise for given exercise id", () => {
    const output = [
      { weightKg: 80, sets: 3, reps: 10 },
      { weightKg: 85, sets: 3, reps: 8 },
    ];
    return request(app)
      .get("/api/jimratty/exercises/664c7b06567913213424f5c6")
      .expect(200)
      .then((response) => {
        console.log("response --->", response);
        expect(exerciseName).toBe("Bench Press");
        expect(exerciseStats).toEqual(output);
      });
  });
});

describe("404 Invalid Endpoint", () => {
  test("GET ALL 404: Endpoint not found", () => {
    return request(app)
      .get("/api/abc")
      .expect(404)
      .then((response) => {
        expect(response.status).toBe(404);
      });
  });
});
