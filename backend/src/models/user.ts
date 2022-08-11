import mongoose from "mongoose";

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 1,
  },
  password: {
    type: String,
    required: true,
    minglength: 5,
  },
});

module.exports = mongoose.model("User", schema);
