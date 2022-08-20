import mongoose from "mongoose";

const channelSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  users: {
    type: [String],
    required: true,
  },
  chats: {
    type: [Object],
  },
});

export default mongoose.model("Channels", channelSchema);
