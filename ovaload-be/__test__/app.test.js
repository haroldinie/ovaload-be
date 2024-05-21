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
    return request(app)
      .get("/api/jimratty/exercises")
      .expect(200)
      .then((response) => {
        // const { exercises } = response;
       console.log("hello from test");
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
