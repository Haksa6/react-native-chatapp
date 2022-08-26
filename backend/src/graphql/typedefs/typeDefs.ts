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
    channels: [Channel]
    channel(channelID: String!): Channel
  }

  type Mutation {
    registerUser(username: String!, password: String!): Token
    loginUser(username: String!, password: String!): Token
    createChannel(title: String!, users: [String]!): Channel
    addUserToChannel(username: String!, channelID: ID!): Channel
    sendMessage(
      channelID: ID!
      senderName: String!
      text: String!
      date: String!
    ): Message
  }

  type Subscription {
    newMessageSubscription(channelID: ID!): Message
  }
`;