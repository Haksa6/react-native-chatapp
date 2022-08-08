import { StyleSheet } from "react-native";
import theme from "../../constants/Theme";

import Constants from "expo-constants";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundPrimary,
    flex: 1,
    display: "flex",
  },
  appbar: {
    backgroundColor: theme.colors.backgroundThird,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  input: {
    backgroundColor: "#202225",
    marginVertical: 7,
    borderRadius: 5,
    color: theme.colors.textPrimary,
    fontSize: 17,
    width: "95%",
  },
});
