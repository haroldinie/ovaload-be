const users = [
  {
    name: "Jimmy Ratty",
    username: "jimratty",
    password: "password123",
    exercises: [
      {
        exerciseName: "bench-press",
        exerciseType: "resistance",
        exerciseStats: [
          { weightKg: 80, sets: 3, reps: 10 },
          { weightKg: 85, sets: 3, reps: 8 },
        ],
      },
      {
        exerciseName: "squat",
        exerciseType: "resistance",
        exerciseStats: [
          { weightKg: 100, sets: 4, reps: 10 },
          { weightKg: 110, sets: 4, reps: 8 },
        ],
      },
      {
        exerciseName: "spin-bike",
        exerciseType: "cardio",
        exerciseStats: [
          { distanceKm: 20, timeMin: 40, reps: 12 },
          { weightKg: 45, sets: 3, reps: 10 },
        ],
      },
      {
        exerciseName: "military-press",
        exerciseType: "resistance",
        exerciseStats: [
          { weightKg: 50, sets: 4, reps: 12 },
          { weightKg: 55, sets: 4, reps: 10 },
        ],
      },
    ],
    friends: ["janesmith", "michaelj", "sarahw"],
    score: 20,
    plannedExercise: [
      {
        exerciseName: "bench-press",
        createdFor: "2024-05-23",
        completed: true,
      },
      { exerciseName: "squat", createdFor: "2024-05-23", completed: true },
      {
        exerciseName: "spin-bike",
        createdFor: "2024-05-23",
        distanceKm: 20,
        timeMin: 27,
        completed: true,
      },
    ],
  },
  {
    name: "Jane Smith",
    username: "janesmith",
    password: "password456",
    exercises: [
      {
        exerciseName: "deadlift",
        exerciseType: "resistance",
        exerciseStats: [
          { weightKg: 120, sets: 3, reps: 14 },
          { weightKg: 120, sets: 3, reps: 12 },
          { weightKg: 120, sets: 3, reps: 10 },
          { weightKg: 120, sets: 3, reps: 8 },
        ],
      },
      {
        exerciseName: "overhead-press",
        exerciseType: "resistance",
        exerciseStats: [
          { weightKg: 50, sets: 3, reps: 12 },
          { weightKg: 55, sets: 3, reps: 10 },
        ],
      },
    ],
    score: 19,
  },
  {
    name: "Michael Johnson",
    username: "michaelj",
    password: "password789",
    exercises: [
      {
        exerciseName: "pull-ups",
        exerciseType: "resistance",
        exerciseStats: [
          { weightKg: 0, sets: 3, reps: 15 },
          { weightKg: 0, sets: 4, reps: 12 },
        ],
      },
      {
        exerciseName: "leg-press",
        exerciseType: "resistance",
        exerciseStats: [
          { weightKg: 200, sets: 4, reps: 10 },
          { weightKg: 220, sets: 4, reps: 8 },
        ],
      },
    ],
    score: 5,
  },
  {
    name: "Emily Clark",
    username: "emilyc",
    password: "password000",
    exercises: [
      {
        exerciseName: "bicep-curls",
        exerciseType: "resistance",
        exerciseStats: [
          { weightKg: 15, sets: 3, reps: 12 },
          { weightKg: 20, sets: 3, reps: 10 },
        ],
      },
      {
        exerciseName: "tricep-dips",
        exerciseType: "resistance",
        exerciseStats: [
          { weightKg: 0, sets: 3, reps: 15 },
          { weightKg: 0, sets: 3, reps: 12 },
        ],
      },
    ],
    score: 30,
  },
  {
    name: "Chris Evans",
    username: "chrisevans",
    password: "password111",
    exercises: [
      {
        exerciseName: "lat-pulldown",
        exerciseType: "resistance",
        exerciseStats: [
          { weightKg: 70, sets: 4, reps: 10 },
          { weightKg: 75, sets: 4, reps: 8 },
        ],
      },
      {
        exerciseName: "shoulder-press",
        exerciseType: "resistance",
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
    friends: ["janesmith", "michaelj", "maizj"],
    exercises: [
      {
        exerciseName: "leg-curl",
        exerciseType: "resistance",
        exerciseStats: [
          {
            weightKg: 40,
            sets: 3,
            reps: 12,
            createdAt: new Date("2024-05-01"),
          },
          {
            weightKg: 45,
            sets: 3,
            reps: 10,
            createdAt: new Date("2024-05-05"),
          },
          {
            weightKg: 50,
            sets: 3,
            reps: 12,
            createdAt: new Date("2024-05-08"),
          },
          {
            weightKg: 65,
            sets: 4,
            reps: 12,
            createdAt: new Date("2024-05-10"),
          },
          {
            weightKg: 75,
            sets: 4,
            reps: 12,
            createdAt: new Date("2024-05-12"),
          },
          {
            weightKg: 80,
            sets: 3,
            reps: 10,
            createdAt: new Date("2024-05-14"),
          },
        ],
      },
      {
        exerciseName: "leg-extension",
        exerciseType: "resistance",
        exerciseStats: [
          {
            weightKg: 50,
            sets: 4,
            reps: 12,
            createdAt: new Date("2024-05-07"),
          },
          {
            weightKg: 55,
            sets: 4,
            reps: 10,
            createdAt: new Date("2024-05-10"),
          },
          {
            weightKg: 65,
            sets: 4,
            reps: 12,
            createdAt: new Date("2024-05-07"),
          },
          {
            weightKg: 75,
            sets: 3,
            reps: 10,
            createdAt: new Date("2024-05-10"),
          },
          {
            weightKg: 80,
            sets: 4,
            reps: 12,
            createdAt: new Date("2024-05-07"),
          },
          {
            weightKg: 90,
            sets: 3,
            reps: 8,
            createdAt: new Date("2024-05-10"),
          },
        ],
      },
      {
        exerciseName: "bench-press",
        exerciseType: "resistance",
        exerciseStats: [
          {
            weightKg: 60,
            sets: 3,
            reps: 10,
            createdAt: new Date("2024-05-12"),
          },
          {
            weightKg: 65,
            sets: 3,
            reps: 10,
            createdAt: new Date("2024-05-14"),
          },
          {
            weightKg: 65,
            sets: 3,
            reps: 12,
            createdAt: new Date("2024-05-15"),
          },
          {
            weightKg: 75,
            sets: 3,
            reps: 10,
            createdAt: new Date("2024-05-17"),
          },
          {
            weightKg: 75,
            sets: 4,
            reps: 10,
            createdAt: new Date("2024-05-19"),
          },
          {
            weightKg: 80,
            sets: 3,
            reps: 8,
            createdAt: new Date("2024-05-20"),
          },

          { weightKg: 65, sets: 3, reps: 8, createdAt: new Date("2024-05-15") },
        ],
      },
      {
        exerciseName: "deadlift",
        exerciseType: "resistance",
        exerciseStats: [
          { weightKg: 70, sets: 4, reps: 6, createdAt: new Date("2024-05-12") },
          { weightKg: 75, sets: 3, reps: 8, createdAt: new Date("2024-05-16") },
          { weightKg: 75, sets: 3, reps: 8, createdAt: new Date("2024-05-17") },
          { weightKg: 80, sets: 4, reps: 8, createdAt: new Date("2024-05-18") },
          { weightKg: 85, sets: 4, reps: 6, createdAt: new Date("2024-05-20") },
        ],
      },
      {
        exerciseName: "running",
        exerciseType: "cardio",
        exerciseStats: [
          { distanceKm: 3, timeMin: 30, createdAt: new Date("2024-05-27") },
          { distanceKm: 4, timeMin: 25, createdAt: new Date("2024-05-19") },
          { distanceKm: 5, timeMin: 30, createdAt: new Date("2024-05-20") },
          { distanceKm: 5, timeMin: 30, createdAt: new Date("2024-05-22") },
          { distanceKm: 7, timeMin: 45, createdAt: new Date("2024-05-24") },
        ],
      },
      {
        exerciseName: "cycling",
        exerciseType: "cardio",
        exerciseStats: [
          { distanceKm: 7, timeMin: 60, createdAt: new Date("2024-05-20") },
          { distanceKm: 7, timeMin: 60, createdAt: new Date("2024-05-22") },
          { distanceKm: 8, timeMin: 60, createdAt: new Date("2024-05-24") },
          { distanceKm: 10, timeMin: 60, createdAt: new Date("2024-05-25") },
          { distanceKm: 12, timeMin: 80, createdAt: new Date("2024-05-26") },
        ],
      },
    ],
    plannedExercise: [
      {
        exerciseName: "leg-curl",
        nextChallenge: [
          { weightKg: 50, sets: 4, reps: 12 },
          { weightKg: 55, sets: 4, reps: 10 },
        ],
        createdFor: new Date("2024-05-27"),
        completed: false,
      },
      {
        exerciseName: "leg-extension",
        nextChallenge: [
          { weightKg: 60, sets: 4, reps: 12 },
          { weightKg: 65, sets: 4, reps: 10 },
        ],
        createdFor: new Date("2024-05-28"),
        completed: false,
      },
      {
        exerciseName: "bench-press",
        nextChallenge: [
          { weightKg: 70, sets: 4, reps: 10 },
          { weightKg: 75, sets: 4, reps: 8 },
        ],
        createdFor: new Date("2024-05-29"),
        completed: false,
      },
      {
        exerciseName: "deadlift",
        nextChallenge: [
          { weightKg: 90, sets: 4, reps: 8 },
          { weightKg: 95, sets: 4, reps: 6 },
        ],
        createdFor: new Date("2024-05-30"),
        completed: false,
      },
      {
        exerciseName: "running",
        nextChallenge: [
          { distanceKm: 6, timeMin: 35 },
          { distanceKm: 8, timeMin: 50 },
        ],
        createdFor: new Date("2024-05-31"),
        completed: false,
      },
      {
        exerciseName: "cycling",
        nextChallenge: [
          { distanceKm: 12, timeMin: 70 },
          { distanceKm: 17, timeMin: 95 },
        ],
        createdFor: new Date("2024-06-01"),
        completed: false,
      },
    ],
    score: 25,
  },
  {
    name: "Maisy Jones",
    username: "maizj",
    password: "password55",
    exercises: [
      {
        exerciseName: "spin-bike",
        exerciseType: "cardio",
        exerciseStats: [
          { distanceKm: 20, timeMin: 40, reps: 12 },
          { weightKg: 45, sets: 3, reps: 10 },
        ],
      },
      {
        exerciseName: "eliptical",
        exerciseType: "cardio",
        exerciseStats: [
          { distanceKm: 3, timeMin: 30 },
          { distanceKm: 3, timeMin: 28 },
        ],
      },
      {
        exerciseName: "military-press",
        exerciseType: "resistance",
        exerciseStats: [
          { weightKg: 50, sets: 4, reps: 12 },
          { weightKg: 55, sets: 4, reps: 10 },
        ],
      },
    ],
  },
];

module.exports = users;
