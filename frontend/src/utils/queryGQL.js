import { gql } from "@apollo/client";

// export const queryTest = gql`
//   {
//     helloWorld {
//         thoughtText
//     }
//   }
// `;

export const getAllUsers = gql`
  query allUsers {
    allUsers {
      _id
      email
      password
    }
  }
`;

export const getAllSudokus = gql`
  query allSudokus {
  allSudokus {
    _id
    answerKey {
      placeOne
      placeTwo
      placeThree
      placeFour
      placeFive
      placeSix
      placeSeven
      placeEight
      placeNine
    }
    startPoint {
      placeOne
      placeTwo
      placeThree
      placeFour
      placeFive
      placeSix
      placeSeven
      placeEight
      placeNine
    }
  }
}
`;