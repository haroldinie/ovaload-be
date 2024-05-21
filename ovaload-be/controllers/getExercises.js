const User = require("../models/user");

exports.getExercises = async (req, res) => {
  const username = req.params.user;
  try {
    const user = await User.findOne({ username: username });
    console.log(user)
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user.exercises);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "No exercises found." });
  }
};
