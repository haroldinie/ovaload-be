const User = require("../models/user");

exports.getNewFriendId = async (req, res) => {
    const username = req.params.username
    try {
        const newFriend = await User.where("username").equals(username)
        if (!newFriend) {
            return res.status(404).json({ message: "User not found" })
        } 
        res.status(200).json(newFriend[0])
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "An error occurred while finding the user" });
      }
}