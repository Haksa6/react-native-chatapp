import { StyleSheet } from "react-native";
import theme from "../../constants/Theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundPrimary,
    flex: 1,
  },
  appbar: {
    backgroundColor: theme.colors.backgroundThird,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  searchbar: {
    width: "95%",
    margin: 10,
    backgroundColor: theme.colors.backgroundGrey,
  },
});
