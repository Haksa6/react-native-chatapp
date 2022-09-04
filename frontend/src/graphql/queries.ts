import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query GetAllUsers {
    getAllUsers {
      username
      password
      channels
    }
  }
`;

export const FIND_USER = gql`
  query FindUser($username: String!) {
    findUser(username: $username) {
      _id
      username
      password
      channels
    }
  }
`;

export const CURRENT_USER = gql`
  query CurrentUser {
    currentUser {
      username
      password
      channels
      _id
    }
  }
`;

export const GET_USERS_CHANNELS = gql`
  query GetUsersChannels {
    getUsersChannels {
      _id
      title
      users
      chats {
        senderName
        date
        text
      }
    }
  }
`;
