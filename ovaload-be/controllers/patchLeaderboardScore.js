const User = require("../models/user");

exports.patchLeaderboardScore = async (req, res) => {
  const username = req.params.user;
  const { score } = req.body;

  try {
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.score += score;
    await user.save();
    res.status(200).json({ updatedScore: user.score });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An error occurred while updating score." });
  }
};