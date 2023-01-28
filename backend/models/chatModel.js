const mongoose = require("mongoose");

const chatModel = mongoose.Schema(
  {
    //trim is used to remove white spaces from strings
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    users: [
      {
        //this will contain the id to that particular user
        //reference to the User Model
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;

// chatName
// isGroupChat
// users
// latestMessage
// groupAdmin
