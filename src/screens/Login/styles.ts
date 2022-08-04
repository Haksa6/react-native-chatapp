import { StyleSheet } from "react-native";
import theme from "../../constants/Theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundPrimary,
    flex: 9,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  input: {
    backgroundColor: "#202225",
    marginVertical: 7,
    borderRadius: 5,
    padding: 2,
    color: theme.colors.textPrimary,
    fontSize: 17,
    width: "90%",
  },
  blueButton: {
    backgroundColor: theme.colors.backgroundBlue,
    borderRadius: 5,
    width: "90%",
    marginTop: 10,
  },
});
