import mongoose from "mongoose";
import bcrypt from "bcrypt";

const saltRounds = 10;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 1,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  token: {
    type: String,
  },
});

//Hash password before being saved to database
userSchema.pre("save", function (next) {
  //Makes sure that the hash is not being hashed / makes sure it has been modified
  if (!this.isModified("password")) {
    return next();
  }

  //generate salt
  bcrypt.genSalt(saltRounds, (saltError, salt) => {
    if (saltError) {
      return next(saltError);
    }
    //hash password using new salt
    bcrypt.hash(this.password, salt, (hashError, hash) => {
      if (hashError) {
        return next(hashError);
      }
      this.password = hash;
      next();
    });
  });
});

export default mongoose.model("Users", userSchema);
