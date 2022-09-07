import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    password: String!
    channels: [String]
  }

  type Message {
    senderName: String!
    text: String!
    date: String!
  }

  type Channel {
    _id: ID!
    title: String!
    users: [String!]!
    chats: [Message]
  }

  type Token {
    token: String!
  }

  type Query {
    getAllUsers: [User]
    findUser(username: String!): User
    currentUser: User
    getChannelData(channelID: String!): Channel
    getUsersChannels: [Channel]
    getAllChannels: [Channel]
  }

  type Mutation {
    registerUser(username: String!, password: String!): Token
    loginUser(username: String!, password: String!): Token
    createChannel(title: String!): Channel
    addUserToChannel(username: String!, channelID: String!): Channel
    sendMessage(
      channelID: String!
      senderName: String!
      text: String!
      date: String!
    ): Message
  }

  type Subscription {
    newMessageSubscription: Message
  }
`;
