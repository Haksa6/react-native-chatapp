import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";

import { port, url } from "./config";
import resolvers from "./graphql/resolvers/users";
import { typeDefs } from "./graphql/typedefs/typeDefs";
import { setContext } from "./utils/setContext";

//Connect to MongoDB atlas database
mongoose
  .connect(url!)
  .then(() => {
    console.log("connected to MongoDB Atlas");
  })
  .catch(error => {
    console.log("error connection to MongoDB", error.message);
  });

// Function to start an apollo server
const startApolloServer = async () => {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: setContext,
    csrfPrevention: true,
    //Protects server from attacks that exhaust memory
    cache: "bounded",
  });
  const app = express();
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.listen({ port }, () => {
    console.log(`Server running on port ${port}${apolloServer.graphqlPath}`);
  });
};

startApolloServer();
