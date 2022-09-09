import { gql } from "@apollo/client";
import { CHANNEL_INFO } from "./fragments";

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
      ...channelFields
    }
  }
  ${CHANNEL_INFO}
`;

export const GET_CHANNEL_DATA = gql`
  query GetChannelData($channelId: String!) {
    getChannelData(channelID: $channelId) {
      ...channelFields
    }
  }
  ${CHANNEL_INFO}
`;
