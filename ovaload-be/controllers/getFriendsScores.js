const User = require("../models/user");

exports.getFriendsScores = async (req, res) => {
  const username = req.params.user;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const friendUsernames = user.friends;

    const leaderboardData = await User.find(
      { username: { $in: [...friendUsernames, username] } },
      { username: 1, score: 1 }
    ).sort({ score: -1 });

    res.status(200).json({ leaderboardData });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "An error occurred while fetching scores." });
  }
};
