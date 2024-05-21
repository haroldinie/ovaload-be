const users = [
  {
    name: "Jimmy Ratty",
    username: "jimratty",
    password: "password123",
    exercises: [
      {
        exerciseName: "Bench Press",
        exerciseStats: [
          { weightKg: 80, sets: 3, reps: 10 },
          { weightKg: 85, sets: 3, reps: 8 },
        ],
      },
      {
        exerciseName: "Squat",
        exerciseStats: [
          { weightKg: 100, sets: 4, reps: 10 },
          { weightKg: 110, sets: 4, reps: 8 },
        ],
      },
    ],
  },
  {
    name: "Jane Smith",
    username: "janesmith",
    password: "password456",
    exercises: [
      {
        exerciseName: "Deadlift",
        exerciseStats: [
          { weightKg: 120, sets: 3, reps: 8 },
          { weightKg: 130, sets: 3, reps: 6 },
        ],
      },
      {
        exerciseName: "Overhead Press",
        exerciseStats: [
          { weightKg: 50, sets: 3, reps: 12 },
          { weightKg: 55, sets: 3, reps: 10 },
        ],
      },
    ],
  },
  {
    name: "Michael Johnson",
    username: "michaelj",
    password: "password789",
    exercises: [
      {
        exerciseName: "Pull-ups",
        exerciseStats: [
          { weightKg: 0, sets: 3, reps: 15 },
          { weightKg: 0, sets: 4, reps: 12 },
        ],
      },
      {
        exerciseName: "Leg Press",
        exerciseStats: [
          { weightKg: 200, sets: 4, reps: 10 },
          { weightKg: 220, sets: 4, reps: 8 },
        ],
      },
    ],
  },
  {
    name: "Emily Clark",
    username: "emilyc",
    password: "password000",
    exercises: [
      {
        exerciseName: "Bicep Curls",
        exerciseStats: [
          { weightKg: 15, sets: 3, reps: 12 },
          { weightKg: 20, sets: 3, reps: 10 },
        ],
      },
      {
        exerciseName: "Tricep Dips",
        exerciseStats: [
          { weightKg: 0, sets: 3, reps: 15 },
          { weightKg: 0, sets: 3, reps: 12 },
        ],
      },
    ],
  },
  {
    name: "Chris Evans",
    username: "chrisevans",
    password: "password111",
    exercises: [
      {
        exerciseName: "Lat Pulldown",
        exerciseStats: [
          { weightKg: 70, sets: 4, reps: 10 },
          { weightKg: 75, sets: 4, reps: 8 },
        ],
      },
      {
        exerciseName: "Shoulder Press",
        exerciseStats: [
          { weightKg: 60, sets: 3, reps: 12 },
          { weightKg: 65, sets: 3, reps: 10 },
        ],
      },
    ],
  },
  {
    name: "Sarah Williams",
    username: "sarahw",
    password: "password222",
    exercises: [
      {
        exerciseName: "Leg Curl",
        exerciseStats: [
          { weightKg: 40, sets: 3, reps: 12 },
          { weightKg: 45, sets: 3, reps: 10 },
        ],
      },
      {
        exerciseName: "Leg Extension",
        exerciseStats: [
          { weightKg: 50, sets: 4, reps: 12 },
          { weightKg: 55, sets: 4, reps: 10 },
        ],
      },
    ],
  },
];

module.exports = users;
