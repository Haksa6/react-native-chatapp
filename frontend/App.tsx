import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import theme from "./src/constants/Theme";
import { Provider } from "react-native-paper";
import AppNavigator from "./src/navigation/AppNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://192.168.254.55:3001/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Provider>
        <SafeAreaView style={styles.container}>
          <StatusBar
            backgroundColor={theme.colors.backgroundSecondary}
            style="light"
          />
          <AppNavigator />
        </SafeAreaView>
      </Provider>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundPrimary,
    flex: 1,
  },
});
