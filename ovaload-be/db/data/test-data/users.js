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
          { weightKg: 85, sets: 5, reps: 14 },
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
    ],
  },
  {
    name: "Emily North",
    username: "emilynorth",
    password: "password456",
    exercises: [],
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
          { weightKg: 120, sets: 3, reps: 14 }
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
    exercises: [
      {
        exerciseName: "leg-curl",
        exerciseType: "resistance",
        exerciseStats: [
          { weightKg: 40, sets: 3, reps: 8 },
          { weightKg: 45, sets: 3, reps: 10 },
        ],
      },
      {
        exerciseName: "leg-extension",
        exerciseType: "resistance",
        exerciseStats: [
          { weightKg: 50, sets: 4, reps: 12 },
          { weightKg: 55, sets: 4, reps: 10 },
        ],
      },
    ],
    plannedExercise: [
      {
        exerciseName: "leg-curl",
        exerciseType: "resistance",
        nextChallenge: [{ weightKg: 47, sets: 4, reps: 12 }],
        createdFor: "2024-05-12T09:38:41.355Z",
        completed: false,
      },
      {
        exerciseName: "leg-extension",
        exerciseType: "resistance",
        nextChallenge: [{ weightKg: 57, sets: 5, reps: 12 }],
        createdFor: "2024-05-13T09:38:41.355Z",
        completed: false,
      },
    ],
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
