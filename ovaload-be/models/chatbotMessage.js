const mongoose = require("mongoose");

const chatbotMessageSchema = new mongoose.Schema({
  type: String,
  timeOfDay: String,
  message: String,
  responses: [
    {
      user: String,
      bot: String,
    },
  ],
});

module.exports = mongoose.model("ChatbotMessage", chatbotMessageSchema);
