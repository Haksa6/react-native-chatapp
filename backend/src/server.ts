import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import { port, env } from "./config";

import { resolvers } from "./graphql/resolvers/resolvers";
import { typeDefs } from "./graphql/typedefs/typeDefs";

const startApolloServer = async () => {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  const app = express();
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.listen({ port }, () => {
    console.log(`Server running on port ${port}${apolloServer.graphqlPath}`);
  });
};

startApolloServer();

// const app = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello world!");
// });

// app.listen(port);
// console.log(`Server running on port ${port}`);
