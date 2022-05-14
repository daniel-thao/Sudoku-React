const express = require("express");
// this is the Apollo server to use GRAPHQL
const { ApolloServer } = require("apollo-server-express");

// Importing the more flexible routes essentially using graphQl base?
const { typeDefs, resolvers } = require("./backend/schemas");

// This is the actual DB
const db = require("./backend/config/connection");

const PORT = process.env.PORT || 3001;

const startServer = async () => {
  const app = express();
  
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  //
  await server.start();
  
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  server.applyMiddleware({ app });

  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  
  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });
};

startServer();
