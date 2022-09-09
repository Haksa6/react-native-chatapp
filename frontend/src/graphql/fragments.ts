import { gql } from "@apollo/client";

export const CHANNEL_INFO = gql`
  fragment channelFields on Channel {
    _id
    title
    users
    chats {
      senderName
      date
      text
    }
  }
`;
