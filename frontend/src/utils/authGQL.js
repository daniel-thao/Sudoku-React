import { gql } from "@apollo/client";

// export const queryTest = gql`
//   {
//     helloWorld {
//         thoughtText
//     }
//   }
// `;

export const createUser = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      _id
      username
      email
      password
    }
  }
`;

export const loginUser = gql`
  mutation loginUser( $email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      _id
      username
      email
      password
    }
  }
`;