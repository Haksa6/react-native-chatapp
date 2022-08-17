import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    password: String!
  }
  type Token {
    token: String!
  }

  type Message {
    id: ID!
    senderName: String!
    text: String!
    date: String!
  }

  type Query {
    allUsers: [User!]!
    findUser(username: String!): User!
    allMessages: [Message!]!
  }

  type Mutation {
    sendMessage(text: String!, username: String!): Message!
    registerUser(username: String!, password: String!): Token
    loginUser(username: String!, password: String!): Token
  }
`;
