import User from "../../models/userSchema";
import { UserInputError } from "apollo-server-express";
import { TypeUser } from "../../types/types";
import { createAuthToken } from "../../utils/jwt";
// import { messages } from "../../fakedata";
import bcrypt from "bcrypt";

export default {
  Query: {
    getAllUsers: async () => {
      return await User.find({});
    },
    findUser: async (root: undefined, args: TypeUser) => {
      return await User.findOne({ username: args.username });
    },
    //returns the user that is logged in from context
    currentUser: async (root: undefined, args: undefined, context: any) => {
      return await context.currentUser;
    },
  },
  Mutation: {
    registerUser: async (root: undefined, args: TypeUser) => {
      if (!args.username || !args.password) {
        throw new UserInputError("Data provided is not valid");
      }

      //Check if an old user is trying to register with same name
      const oldUser = await User.findOne({ username: args.username });
      if (oldUser) {
        throw new UserInputError(
          `A user is already registered with the username ${args.username}`,
        );
      }

      await new User({
        username: args.username,
        password: args.password,
      }).save();

      return {
        token: createAuthToken(args.username),
      };
    },

    loginUser: async (root: undefined, args: TypeUser) => {
      if (!args.username || !args.password) {
        throw new UserInputError("Invalid credentials");
      }
      const loginUser = await User.findOne({ username: args.username });

      if (!loginUser) {
        throw new UserInputError("User not found");
      }

      //Compare the entered password with the one in the database
      const correctPassword = await bcrypt.compare(
        args.password,
        loginUser.password,
      );

      if (!correctPassword) {
        throw new UserInputError("Wrong password");
      }

      return {
        token: createAuthToken(args.username),
      };
    },
  },
};
