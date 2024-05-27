const ChatbotMessage = require("../models/chatbotMessage");
const User = require("../models/user");

exports.getChatbotMessage = async (req, res) => {
  const username = req.params.user;

  try {
    const user = await User.findOne({ username: username });
    if (!user) return res.status(404).send("User not found");

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const plannedExerciseToday = user.plannedExercise.find((exercise) => {
      const exerciseDate = new Date(exercise.createdFor);
      exerciseDate.setHours(0, 0, 0, 0);
      return exerciseDate.getTime() === today.getTime();
    });

    if (!plannedExerciseToday) {
      const message = await ChatbotMessage.findOne({
        type: "noPlan",
        timeOfDay: "any",
      });
      return res.status(200).json({ message: message.message });
    }

    if (plannedExerciseToday.completed) {
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
