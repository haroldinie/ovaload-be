const users = require("../db/data/dev-data/users");
const chatbotMessages = require("../db/data/test-data/chatbotMessage");
const seed = require("../db/seeds/seed");
const request = require("supertest");
const connectDB = require("../db/connection");
const mongoose = require("mongoose");
const app = require("../app");

beforeAll(async () => {
  await connectDB();
  await seed(users, chatbotMessages);
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
        expect(response.text).toBe("Invalid Endpoint");
        expect(response.status).toBe(404);
      });
  });
});

describe("GET /api/:user/exercises", () => {
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

describe("GET /api/:user/exercises/:date", () => {
  test("GET 200: Returns all exercises for user by selected date.", () => {
    return request(app)
      .get("/api/jimratty/exercises/2024-05-27")
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

  test("GET 200: Returns error if no exercises found.", () => {
    return request(app)
      .get("/api/jimratty/exercises/2024-05-20")
      .expect(200)
      .then((response) => {
        expect(response.body.message).toBe(
          "No exercises found for the given date."
        );
      });
  });
});

describe("POST /api/:user/plannedExercises", () => {
  test("POST 201: Resistance - Post an array of exercises into selected date's planned exercise schema , and will responds with newly posted array.", () => {
    const workoutArr = [{ exerciseName: "Deadlift", createdFor: "2024-06-22" }];
    return request(app)
      .post("/api/janesmith/plannedExercises")
      .send(workoutArr)
      .expect(201)
      .then(({ body }) => {
        const { plannedExercises } = body;
        plannedExercises.forEach((exercise) => {
          expect(exercise).toMatchObject({
            exerciseName: "deadlift",
            nextChallenge: [{ weightKg: 120, sets: 4, reps: 6 }],
            createdFor: "2024-06-22T00:00:00.000Z",
            completed: false,
          });
        });
      });
  });

  test("POST 201: Cardio: Post an array of exercises into selected date's planned exercise schema , and will responds with newly posted array.", () => {
    const workoutArr = [
      {
        exerciseName: "Spin Bike",
        createdFor: "2024-06-22",
        distanceKm: 20,
        timeMin: 27,
      },
    ];
    return request(app)
      .post("/api/maizj/plannedExercises")
      .send(workoutArr)
      .expect(201)
      .then(({ body }) => {
        const { plannedExercises } = body;
        plannedExercises.forEach((exercise) => {
          expect(exercise).toMatchObject({
            exerciseName: "spin-bike",
            nextChallenge: [{ distanceKm: 20, timeMin: 27 }],
            createdFor: "2024-06-22T00:00:00.000Z",
            completed: false,
          });
        });
      });
  });

  test("POST 404: Returns error if no exercises history found.", () => {
    const workoutArr = [
      { exerciseName: "Bench Press", createdFor: "2024-06-22" },
      { exerciseName: "squat", createdFor: "2024-06-22" },
    ];
    return request(app)
      .post("/api/emilynorth/plannedExercises")
      .send(workoutArr)
      .expect(404)
      .then((response) => {
        expect(response.body.message).toBe("No exercise history found.");
      });
  });
});

describe("PATCH /api/:user/plannedExercises/:date/:exerciseName", () => {
  test("PATCH 200: Patch an planned exercise to update complete status from false to true when user completed challenge", () => {
    const completedChallenge = { completed: true };
    return request(app)
      .patch("/api/janesmith/plannedExercises/2024-06-22/deadlift")
      .send(completedChallenge)
      .expect(200)
      .then(({ body }) => {
        expect(body).toMatchObject({
          exerciseName: "deadlift",
          nextChallenge: [{ weightKg: 120, sets: 4, reps: 6 }],
          completed: true,
        });
      });
  });

  test("PATCH 404: Respond with an error when invalid body", () => {
    const completedChallenge = { completed: true };
    return request(app)
      .patch("/api/jimratty/plannedExercises/2024-06-21/bench-press")
      .send(completedChallenge)
      .expect(404)
      .then((response) => {
        expect(response.body.message).toBe("Planned exercise not found");
      });
  });
});

describe("GET /api/:user/plannedExercises/:date", () => {
  test("GET 200: Returns all planned exercises for user by selected date.", () => {
    return request(app)
      .get("/api/janesmith/plannedExercises/2024-06-22")
      .expect(200)
      .then(({ body }) => {
        const { plannedExercisesByDate } = body;
        plannedExercisesByDate.forEach((exercise) => {
          expect(exercise).toMatchObject({
            createdFor: "2024-06-22T00:00:00.000Z",
          });
        });
      });
  });

  test("GET 400: Returns error if no exercises found.", () => {
    return request(app)
      .get("/api/janesmith/plannedExercises/2024-06-20")
      .expect(400)
      .then((response) => {
        expect(response.body.message).toBe(
          "No exercises found for the given date."
        );
      });
  });
});

describe("POST /api/:user/exercises", () => {
  test("POST 201: Posts a new exercise for given user", () => {
    const newExercise = {
      exerciseName: "hamstring",
      exerciseStats: [
        {
          weightKg: 5,
          sets: 3,
          reps: 8,
        },
      ],
    };
    return request(app)
      .post("/api/jimratty/exercises")
      .send(newExercise)
      .expect(201)
      .then(({ body }) => {
        const { exercise } = body;
        expect(exercise).toMatchObject({
          exerciseName: "hamstring",
          exerciseStats: [
            {
              weightKg: 5,
              sets: 3,
              reps: 8,
              createdAt: expect.any(String),
            },
          ],
        });
      });
  });
  test("Throws post 400 when exercise already exists", () => {
    const newExercise = {
      exerciseName: "squat",
      exerciseStats: [
        {
          weightKg: 5,
          sets: 3,
          reps: 10,
        },
      ],
    };
    return request(app)
      .post("/api/jimratty/exercises")
      .send(newExercise)
      .expect(400);
  });
});

describe("POST /api/:user/exercises/:exerciseName", () => {
  test("POST 201: Posts new exercise stats", () => {
    const newExerciseStats = {
      weightKg: 50,
      reps: 10,
      sets: 3,
    };
    return request(app)
      .post("/api/jimratty/exercises/squat")
      .send(newExerciseStats)
      .expect(201)
      .then(({ body }) => {
        const exerciseStats = body;
        expect(exerciseStats).toMatchObject({
          weightKg: 50,
          reps: 10,
          sets: 3,
          createdAt: expect.any(String),
        });
      });
  });
});

describe("GET /api/:user/:exercise", () => {
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

describe("PATCH /api/:user/leaderboard", () => {
  test("PATCH 200: Update leaderboard score for new user", () => {
    const score = { score: 2 };
    return request(app)
      .patch("/api/janesmith/leaderboard")
      .send(score)
      .expect(200)
      .then(({ body }) => {
        const { updatedScore } = body;
        expect(updatedScore).toBe(2);
      });
  });

  test("PATCH 200: Update leaderboard score when user have previous score ", () => {
    const score = { score: 2 };
    return request(app)
      .patch("/api/janesmith/leaderboard")
      .send(score)
      .expect(200)
      .then(({ body }) => {
        const { updatedScore } = body;
        expect(updatedScore).toBe(4);
      });
  });
});

// describe("GET /api/leaderboard", () => {
//   test("GET 200: Get all users' scores sorted by score in descending order", () => {
//     return request(app)
//       .get("/api/leaderboard")
//       .expect(200)
//       .then(({ body }) => {
//         const { users } = body;
//         expect(users).toBeSortedBy("score", { descending: true });
//       });
//   });
// });

describe("PATCH /api/:user", () => {
  test("PATCH 200: Updates friends list of logged-in user when given ObjectId of new friend", () => {
    const newFriend = {
      username: "emilynorth",
    };
    return request(app)
      .patch("/api/chrisevans")
      .send(newFriend)
      .expect(200)
      .then(({ body }) => {
        const { updatedFriendsList } = body;
        expect(updatedFriendsList[updatedFriendsList.length - 1]).toEqual(
          newFriend.username
        );
      });
  });
});

describe("/api/leaderboard/friends/:user", () => {
  test("GET 200: Returns scores for given user and their friends in descending order.", () => {
    return request(app)
      .get("/api/leaderboard/friends/jimratty")
      .expect(200)
      .then(({ body }) => {
        const { leaderboardData } = body;
        expect(leaderboardData.length).toBe(4);
        expect(leaderboardData).toBeSortedBy("score", { descending: true });
      });
  });
});

describe("/api/chatbot/:user", () => {
  test("GET 200: Returns chatbot message ", () => {
    return request(app)
      .get("/api/chatbot/jimratty")
      .expect(200)
      .then(({ body }) => {
        const { message } = body;
        expect(message).toBe(
          "It looks like you have no exercises planned for today. Why not add some to your calendar?"
        );
      });
  });

  //uses users from dev-data
  test.skip("GET 200: Returns chatbot message", () => {
    const responsesArr = { user: expect.any(String), bot: expect.any(String) };
    return request(app)
      .get("/api/chatbot/sarahw")
      .expect(200)
      .then(({ body }) => {
        const { message } = body;
        const { responses } = body;
        responses.map((item) => {
          expect(item).toMatchObject(responsesArr);
        });
        expect(message).toBe("Good morning! How are you feeling today?");
      });
  });
});

//uses users from dev-data
describe.only("/api/:user/plannedExercises/:date/:exerciseName", () => {
  test("DELETE: Deletes plannedExercises by name and date", () => {
    return request(app)
      .delete("/api/sarahw/plannedExercises/2024-05-30/deadlift")
      .expect(204)
      .then(({ body }) => {
        expect(body).toEqual({});
      });
  });
});
