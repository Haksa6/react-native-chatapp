import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  split,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";

//The apollo server link using the ip since it doesnt with work localhost for some reason, use ipconfig to find your address
const httpLink = createHttpLink({
  uri: "http://86.50.38.57:3001/graphql",
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://86.50.38.57:3001/graphql",
  }),
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink,
);

const createApolloClient = () => {
  //Used for authentication for user, get token from header
  const authLink = setContext(async (_, { headers }) => {
    try {
      const token = await AsyncStorage.getItem("token");
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : "",
        },
      };
    } catch (e) {
      console.log(e);
      return {
        headers,
      };
    }
  });

  return new ApolloClient({
    link: authLink.concat(splitLink),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
