const data = require("../db/data/test-data/users");
const seed = require("../db/seeds/seed");
const request = require("supertest");
const connectDB = require("../db/connection");
const mongoose = require("mongoose");
const app = require("../app");
const { describe } = require("node:test");

beforeAll(async () => {
  await connectDB();
  await seed(data)
});



afterAll(async () => {
  await mongoose.connection.close();
});

describe("/api/:user/exercises", () => {
  test("GET 200: Returns all exercises for given user.", () => {
    return request(app)
      .get("/api/jimratty/exercises")
      .expect(200)
      .then((response) => {
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

describe("/api/:user/exercises", () => {
  test("POST 201: Posts a new exercise for given user", () => {
    const newExercise = {
      exerciseName: "hamstring",
      exerciseStats: [{
        weightKg: 5,
        sets: 3,
        reps: 8
      }]
    }
    return request(app)
    .post("/api/jimratty/exercises")
    .send(newExercise)
    .expect(201)
    .then(({body}) => {
      const {exercise} = body
      expect(exercise).toMatchObject({
        exerciseName: "hamstring",
        exerciseStats: [{
        weightKg: 5,
        sets: 3,
        reps: 8,
        createdAt: expect.any(String)
      }]
      })
    })
  })
  test("Throws post 400 when exercise already exists", () => {
    const newExercise = {
      exerciseName: "Squat",
      exerciseStats: [{
        weightKg: 5,
        sets: 3,
        reps: 10
      }]
    }
    return request(app)
    .post("/api/jimratty/exercises")
    .send(newExercise)
    .expect(400)
  })
})

describe("/api/:user/exercises/:exerciseName", () => {
  test("POST 201: Posts new exercise stats", () => {
    const newExerciseStats = {
      weightKg: 50,
      reps: 10,
      sets: 3
    }
    return request(app)
    .post("/api/jimratty/exercises/Squat")
    .send(newExerciseStats)
    .expect(201)
    .then(({body}) => {
      const exerciseStats = body
      expect(exerciseStats).toMatchObject({
        weightKg: 50,
        reps: 10,
        sets: 3,
        createdAt: expect.any(String)
      })
    })
  })
})