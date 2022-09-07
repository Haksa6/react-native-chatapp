import { gql } from "@apollo/client";

export const MESSAGE_SUBSCRIPTION = gql`
  subscription NewMessageSubscription {
    newMessageSubscription {
      senderName
      text
      date
    }
  }
`;
