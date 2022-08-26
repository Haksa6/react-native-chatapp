import { gql } from "@apollo/client";

const FIND_USER = gql`
  query FindUser($username: String!) {
    findUser(username: $username) {
      _id
      username
      password
      channels
    }
  }
`;

export default FIND_USER;
