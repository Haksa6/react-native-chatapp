import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  senderName: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Messages", messageSchema);
