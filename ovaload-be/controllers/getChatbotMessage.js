const ChatbotMessage = require("../models/chatbotMessage");
const User = require("../models/user");
const { getTimeOfDay } = require("../utils/utils");

exports.getChatbotMessage = async (req, res) => {
  const username = req.params.user;

  try {
    const user = await User.findOne({ username: username });
    if (!user) return res.status(404).send("User not found");

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const plannedExerciseToday = user.plannedExercise.filter((exercise) => {
      const exerciseDate = new Date(exercise.createdFor);
      exerciseDate.setHours(0, 0, 0, 0);
      return exerciseDate.getTime() === today.getTime();
    });

    if (plannedExerciseToday.length === 0) {
      const message = await ChatbotMessage.findOne({
        type: "noPlan",
        timeOfDay: "any",
      });
      return res.status(200).json({ message: message.message });
    }

    const areAllCompleted = plannedExerciseToday.every((exercise) => {
      return exercise.completed;
    });

    if (areAllCompleted) {
      const message = await ChatbotMessage.findOne({
        type: "completed",
        timeOfDay: "any",
      });
      return res.status(200).json({ message: message.message });
    }

    const timeOfDay = getTimeOfDay();
    const message = await ChatbotMessage.findOne({
      type: "incomplete",
      timeOfDay,
    });

    res.status(200).json({
      message: message.message,
      responses: message.responses,
    });
  } catch (error) {
    res.status(500).send("Server error");
  }
};
