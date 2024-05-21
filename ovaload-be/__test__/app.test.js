const data = require("../db/data/test-data/users");
const seed = require("../db/seeds/seed");
const request = require("supertest");
const connectDB = require("../db/connection");
const mongoose = require("mongoose");
const app = require("../app");

beforeAll(async () => {
  await connectDB();
  await seed(data);
});

// beforeEach(async () => {
//   await seed(data);
// });

afterAll(async () => {
  await mongoose.connection.close();
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

describe("/api/:user/exercises/:date", () => {
  test("GET 200: Returns all exercises for user by selected date.", () => {
    return request(app)
      .get("/api/jimratty/exercises/2024-05-21")
      .expect(200)
      .then(({ body }) => {
        const { exercisesByDate } = body;
        exercisesByDate.forEach((exercise) => {
          exercise.exerciseStats.forEach((stat) => {
            const regex = /^(\d\d\d\d-\d\d-\d\d)/g;
            const matchDate = regex.test(stat.createdAt);
            expect(matchDate).toBe(true);
          });
        });
      });
  });

  test("GET 400: Returns error if no exercises found.", () => {
    return request(app)
      .get("/api/jimratty/exercises/2024-05-20")
      .expect(400)
      .then((response) => {
        expect(response.body.message).toBe(
          "No exercises found for the given date."
        );
      });
  });
});

describe("/api/:user/plannedExercises", () => {
  test("POST 201: Post an array of exercises into selected date's planned exercise schema , and will responds with newly posted array.", () => {
    const workoutArr = [
      { exerciseName: "Bench Press" , createdFor: "2024-05-22"},
      { exerciseName: "squat" , createdFor: "2024-05-22"},
    ];
    return request(app)
      .post("/api/jimratty/plannedExercises")
      .send(workoutArr)
      .expect(201)
      .then(({ body }) => {
        const { plannedExercises } = body;
        plannedExercises.forEach((exercise) => {
        expect(exercise.createdFor).toBe('2024-05-22T00:00:00.000Z')
        });
      });
  });
});
