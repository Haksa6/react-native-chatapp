import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Welcome from "./src/screens/Welcome";
import theme from "./src/constants/Theme";
import Constants from "expo-constants";

const statusbarHeight = Constants.statusBarHeight;

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={theme.colors.backgroundSecondary}
        style="light"
      />
      <Welcome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundPrimary,
    flex: 1,
    paddingTop: statusbarHeight,
  },
});
