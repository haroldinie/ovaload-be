const chatbotMessages = [
  {
    type: "noPlan",
    timeOfDay: "any",
    message:
      "It looks like you have no exercises planned for today. Why not add some to your calendar?",
    responses: [],
  },
  {
    type: "completed",
    timeOfDay: "any",
    message: "Great job on completing your planned exercises!",
    responses: [],
  },
  {
    type: "incomplete",
    timeOfDay: "morning",
    message: "Good morning! How are you feeling today?",
    responses: [
      {
        user: "I feel great!",
        bot: "That’s wonderful to hear! Let’s make today awesome with a good workout!",
      },
      {
        user: "I am a bit tired.",
        bot: "That’s okay. Maybe a light exercise session will help you feel more energized.",
      },
      {
        user: "Not feeling well.",
        bot: "Take it easy today. Rest is just as important as exercise.",
      },
    ],
  },
  {
    type: "incomplete",
    timeOfDay: "afternoon",
    message: "Good afternoon! How are you feeling today?",
    responses: [
      {
        user: "I feel great!",
        bot: "That’s wonderful to hear! Let’s make today awesome with a good workout!",
      },
      {
        user: "I am a bit tired.",
        bot: "That’s okay. Maybe a light exercise session will help you feel more energized.",
      },
      {
        user: "Not feeling well.",
        bot: "Take it easy today. Rest is just as important as exercise.",
      },
    ],
  },
  {
    type: "incomplete",
    timeOfDay: "evening",
    message: "Good evening! How are you feeling today?",
    responses: [
      {
        user: "I feel great!",
        bot: "That’s wonderful to hear! Let’s make today awesome with a good workout!",
      },
      {
        user: "I am a bit tired.",
        bot: "That’s okay. Maybe a light exercise session will help you feel more energized.",
      },
      {
        user: "Not feeling well.",
        bot: "Take it easy today. Rest is just as important as exercise.",
      },
    ],
  },
];

module.exports = chatbotMessages;
