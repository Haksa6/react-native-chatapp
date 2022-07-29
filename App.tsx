import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Welcome from "./src/screens/Welcome";
import theme from "./src/constants/Theme";
import Constants from "expo-constants";
import { Provider } from "react-native-paper";
import AppNavigator from "./src/AppNavigator";

const statusbarHeight = Constants.statusBarHeight;

export default function App() {
  return (
    <Provider>
      <View style={styles.container}>
        <StatusBar
          backgroundColor={theme.colors.backgroundSecondary}
          style="light"
        />
        <AppNavigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundPrimary,
    flex: 1,
    paddingTop: statusbarHeight,
  },
});
