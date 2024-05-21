const User = require("../models/user");

exports.getExercises = async (req, res) => {
  const username = req.params.user;
  try {
    const exercises = await User.find({ username: "jimratty" });
    console.log(exercises);
    // if (!username) {
    //   return res.status(404).json({ message: "User not found" });
    // }
    res.status(200).json(exercisesArray);
  } catch (error) {
    res.status(400).json({ message: "No exercises found." });
  }
};
