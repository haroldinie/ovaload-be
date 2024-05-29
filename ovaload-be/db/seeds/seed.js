const mongoose = require("mongoose");
const connectDB = require("../connection");
const User = require("../../models/user");
const ChatbotMessage = require("../../models/chatbotMessage");

const seedDatabase = async (users, chatbotMessages) => {
  try {
    await connectDB();
    // Clear existing data
    await User.deleteMany({});
    await ChatbotMessage.deleteMany({});

    // Insert new data
    await User.insertMany(users);
    await ChatbotMessage.insertMany(chatbotMessages);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } 
  finally {
    console.log("Closing database connection");
    await mongoose.connection.close();
  }
};

module.exports = seedDatabase;
