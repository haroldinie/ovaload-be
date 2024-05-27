const seedDatabase = require("./seed");
const users = require("../data/dev-data/users");
const chatbotMessages = require("../data/dev-data/chatbotMessages");

const runSeed = async () => {
  try {
    console.log("Runs seed");
    await seedDatabase(users, chatbotMessages);
  } catch (error) {
    console.error("Error running seed:");
  }
};

runSeed();