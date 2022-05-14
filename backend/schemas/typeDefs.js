const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Users {
    _id: ID
    username: String
    email: String
    password: String
    wipSudokus: [Sudokus]
    completedSudokus: [Sudokus]
  }

  type Sudokus {
    _id: ID
    answerKey: [sudokuBox]
    startPoint: [sudokuBox]
    difficulty: String
  }

  type sudokuBox {
    placeOne: Int
    placeTwo: Int
    placeThree: Int
    placeFour: Int
    placeFive: Int
    placeSix: Int
    placeSeven: Int
    placeEight: Int
    placeNine: Int
  }

  type Query {
    helloWorld: String
    allUsers: [Users]
    allSudokus: [Sudokus]
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Users
    loginUser(email: String!, password: String!): Users
  }
`;

module.exports = typeDefs;
