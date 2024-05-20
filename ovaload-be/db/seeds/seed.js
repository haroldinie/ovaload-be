const mongoose = require("mongoose")
const database = require("../connection")
const User = require("../../models/user`")
const users = require("../data/test-data/users")

database()

const seedDatabase = async () => {
    try {
      // Clear existing data
      await User.deleteMany({});
      // Insert new data
      await User.insertMany(users);
      console.log('Database seeded successfully');
    } catch (error) {
      console.error('Error seeding database:', error);
    } finally {
      mongoose.connection.close();
    }
  };

  seedDatabase()