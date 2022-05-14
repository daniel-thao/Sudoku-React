const { Sudokus, User } = require("../models");
const { userSchema } = require("../models/users");
const { signToken } = require("../utils/authMiddleware");

const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    helloWorld: async () => {
      return "hello World";
    },
    allSudokus: async () => {
      return await Sudokus.find();
    },
    allUsers: async () => {
      return await User.find();
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      return await User.create(args);
    },
    loginUser: async (parent, { email, password }) => {
      const isUser = await User.findOne({ email });
      if (!isUser) throw new AuthenticationError("Incorrect Credentials");

      const correctPw = await isUser.isCorrectPassword(password);
      if (!correctPw) throw new AuthenticationError("Incorrect Credentials");

      const token = signToken(isUser);

      return { token, isUser };
    },
  },
};

module.exports = resolvers;
