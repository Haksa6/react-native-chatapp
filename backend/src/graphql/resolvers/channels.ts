import { TypeChannel, TypeMessage } from "../../types/types";
import Channel from "../../models/channelSchema";
import { ApolloError } from "apollo-server-express";
import { PubSub } from "graphql-subscriptions";
import User from "../../models/userSchema";
// import mongoose from "mongoose";

const pubsub = new PubSub();

export default {
  Query: {},
  Mutation: {
    createChannel: async (root: undefined, args: TypeChannel) => {
      let newChannel = await new Channel({ ...args }).save();

      //context.currentUser
      console.log(args.users[0]);
      await User.findOneAndUpdate(
        { username: args.users[0] },
        { $push: { channels: newChannel._id } },
        { new: true },
      );

      return newChannel;
    },
    sendMessage: async (root: undefined, args: TypeMessage) => {
      const { senderName, date, text, channelID } = args;

      let channel = await Channel.findByIdAndUpdate(
        channelID,
        { $push: { chats: { senderName, date, text } } },
        { new: true },
      );

      const newMessage: any = {
        senderName: args.senderName,
      };

      if (channel === null) {
        throw new ApolloError("Channel was not found!");
      } else {
        newMessage["senderName"] = args.senderName;
        newMessage["date"] = args.date;
        newMessage["text"] = args.text;
      }

      pubsub.publish("MESSAGE_SENT", { newMessageSubscription: newMessage });
      return newMessage;
    },
  },
  Subscription: {
    newMessageSubscription: {
      subscribe: () => pubsub.asyncIterator(["MESSAGE_SENT"]),
    },
  },
};
