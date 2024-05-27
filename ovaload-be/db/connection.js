const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");

const env = process.env.NODE_ENV || "development" || "production"
const envFile =
  env === "test"
    ? ".env.test"
    : env === "production"
    ? ".env.production"
    : ".env.development";

dotenv.config({ path: path.resolve(process.cwd(), envFile) });

const mongoString = process.env.DATABASE_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoString, {
      autoIndex: true
    });
    console.log("Connected to Mongodb Atlas");
  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
