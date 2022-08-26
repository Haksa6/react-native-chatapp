import { gql } from "@apollo/client";

const GET_ALL_USERS = gql`
  query GetAllUsers {
    getAllUsers {
      username
      password
      channels
    }
  }
`;

export default GET_ALL_USERS;
