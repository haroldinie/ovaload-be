const User = require("../models/user")

exports.patchNewFriendByUsername = async (req, res) => {
    const username = req.body.username
    const loggedInUser = req.params.user

    try {
        const newFriend = await User.where("username").equals(username)
        if (!newFriend) {
            return res.status(404).json({ message: "User not found" })
        } 
       const updatedLoggedInUser = await User.findOneAndUpdate({username: loggedInUser}, {$push: {friends: username}},  { new: true, useFindAndModify: false })
       await updatedLoggedInUser.save()
       res.status(200).json({updatedFriendsList: updatedLoggedInUser.friends})
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "An error occurred while finding the user" });
      }
}