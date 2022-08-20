import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { createServer } from "http";
import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";

import { port, url } from "./config";
import { resolvers } from "./graphql/resolvers/resolvers";
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

// Function to start the apollo server
const startApolloServer = async () => {
  //Express app and HTTP server, WebSocket and ApolloServer will be attached to the HTTP server
  const app = express();
  const httpServer = createServer(app);

  //The schema
  const schema = makeExecutableSchema({ typeDefs, resolvers });

  //The websocket server
  const wsServer = new WebSocketServer({
    server: httpServer,
    path: "/graphql",
  });

  //Save server's info so it can be shutdown later
  const serverCleanup = useServer({ schema }, wsServer);

  const apolloServer = new ApolloServer({
    schema,
    context: setContext,
    csrfPrevention: true,
    //Protects server from attacks that exhaust memory
    cache: "bounded",
    plugins: [
      //Proper shutdown for the HTTP server
      ApolloServerPluginDrainHttpServer({ httpServer }),

      //Proper shutdown for the WebSocket server.
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose();
            },
          };
        },
      },
    ],
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  httpServer.listen({ port }, () => {
    console.log(`Server running on port ${port}${apolloServer.graphqlPath}`);
  });
};

startApolloServer();
