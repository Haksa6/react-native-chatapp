import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    username: String!
    id: ID!
  }

  type Query {
    allUsers: [User!]!
    findUser(username: String!): User
  }
`;
