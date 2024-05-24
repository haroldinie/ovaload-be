const seedDatabase = require("./seed");
const data = require("../data/dev-data/users");

const runSeed = async () => {
  try {
    console.log("Runs seed");
    await seedDatabase(data);
  } catch (error) {
    console.error("Error running seed:");
  }
};

runSeed();