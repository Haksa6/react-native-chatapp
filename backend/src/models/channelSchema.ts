import mongoose from "mongoose";

const channelSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
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
