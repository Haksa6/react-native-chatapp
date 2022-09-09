import { gql } from "@apollo/client";
import { CHANNEL_INFO } from "./fragments";

export const REGISTER_USER = gql`
  mutation registerUser($username: String!, $password: String!) {
    registerUser(username: $username, password: $password) {
      token
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      token
    }
  }
`;

export const CREATE_CHANNEL = gql`
  mutation CreateChannel($title: String!) {
    createChannel(title: $title) {
      ...channelFields
    }
  }
  ${CHANNEL_INFO}
`;

export const ADD_USER_TO_CHANNEL = gql`
  mutation AddUserToChannel($username: String!, $channelId: String!) {
    addUserToChannel(username: $username, channelID: $channelId) {
      ...channelFields
    }
  }
  ${CHANNEL_INFO}
`;

export const SEND_MESSAGE = gql`
  mutation SendMessage(
    $channelId: String!
    $senderName: String!
    $text: String!
    $date: String!
  ) {
    sendMessage(
      channelID: $channelId
      senderName: $senderName
      text: $text
      date: $date
    ) {
      senderName
      text
      date
    }
  }
`;
