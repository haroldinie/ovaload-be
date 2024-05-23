const User = require("../models/user");

exports.getAllScores = async (req, res) => {
    try {
      const users = await User.find({}, { username: 1, score: 1 })
        .sort({ score: -1 })
        .exec();
      res.status(200).json({ users });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "An error occurred while fetching scores." });
    }
  };
  