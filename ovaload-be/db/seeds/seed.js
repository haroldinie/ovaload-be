const mongoose = require("mongoose");
const connectDB = require("../connection");
const User = require("../../models/user");
const users = require("../data/dev-data/users");

const seedDatabase = async (data) => {
  try {
    await connectDB();
    // Clear existing data
    await User.deleteMany({});
    // Insert new data
    await User.insertMany(data);
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
