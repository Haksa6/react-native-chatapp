import { TypeMessage } from "../../types/types";
import Channel from "../../models/channelSchema";
import { ApolloError } from "apollo-server-express";
import { PubSub } from "graphql-subscriptions";
import User from "../../models/userSchema";
// import mongoose from "mongoose";

const pubsub = new PubSub();

export default {
  Query: {
    getAllChannels: async () => {
      return await Channel.find({});
    },
    getChannelData: async (root: undefined, args: { channelID: string }) => {
      return await Channel.findById(args.channelID);
    },
    //Get the logged in users channels
    getUsersChannels: async (
      root: undefined,
      args: undefined,
      context: any,
    ) => {
      let channels: any = [];
      for (let i = 0; i < context.currentUser.channels.length; i++) {
        channels.push(Channel.findById(context.currentUser.channels[i]));
      }
      return channels;
    },
  },
  Mutation: {
    createChannel: async (
      root: undefined,
      args: { title: string },
      context: any,
    ) => {
      if (!context.currentUser) {
        throw new ApolloError("Error at finding the current user");
      }

      let newChannel = await new Channel({
        title: args.title,
        users: context.currentUser.username,
      }).save();

      //context.currentUser
      console.log(context.currentUser.username);
      await User.findOneAndUpdate(
        { username: context.currentUser.username },
        { $push: { channels: newChannel._id } },
        { new: true },
      );

      return newChannel;
    },
    addUserToChannel: async (root: undefined, args: any, context: any) => {
      const { username, channelID } = args;

      if (username === context.currentUser.username) {
        throw new ApolloError("Can't add yourself!");
      }

      const user = await User.findOne({ username });

      console.log(user);

      //if user is found add the user on the channels user list
      if (user !== null) {
        const channel = await Channel.findByIdAndUpdate(
          channelID,
          //addToSet wont push if not unique
          { $addToSet: { users: username } },
          { new: true },
        );
        //if channel is found add the channel on users channel list
        if (channel !== null) {
          await User.findOneAndUpdate(
            { username: username },
            { $addToSet: { channels: channelID } },
            { new: true },
          );
          return channel;
        } else {
          throw new ApolloError("Couldn't find the channel!");
        }
      } else {
        throw new ApolloError("Couldn't find the user!");
      }
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
