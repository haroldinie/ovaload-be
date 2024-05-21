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
    return request(app)
      .get("/api/jimratty/exercises")
      .expect(200)
      .then((response) => {
        // const { exercises } = response;
        console.log("hello from test");
      });
  });
});

describe.only("/api/:user/:date/exercises", () => {
  test("GET 200: Returns all exercises for user by selected date.", () => {
    return request(app)
      .get("/api/jimratty/2024-05-21/exercises")
      .expect(200)
      .then(({body}) => {
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
      .get("/api/jimratty/2024-05-20/exercises")
      .expect(400)
      .then((response) => {
        expect(response.body.message).toBe("No exercises found for the given date.");
      });
  });
});