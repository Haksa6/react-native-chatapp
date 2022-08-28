import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import theme from "./src/constants/Theme";
import { Provider } from "react-native-paper";
import AppNavigator from "./src/navigation/AppNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import { ApolloProvider } from "@apollo/client";
// import AuthStorage from "./src/utils/authStorage";
import createApolloClient from "./src/utils/apolloClient";

// const authStorage = new AuthStorage();
const apolloClient = createApolloClient();

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
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
