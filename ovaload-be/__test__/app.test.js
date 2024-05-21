const data = require("../db/data/test-data/users");
const seed = require("../db/seeds/seed");
const request = require("supertest");
const connectDB = require("../db/connection");
const mongoose = require("mongoose");
const app = require("../app");

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
