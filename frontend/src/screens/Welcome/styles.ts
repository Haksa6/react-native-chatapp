import { StyleSheet } from "react-native";
import theme from "../../constants/Theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundPrimary,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 3,
  },
  icon: {
    width: 150,
    height: 120,
  },
  textContainer: {
    flex: 2,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  greyButton: {
    backgroundColor: theme.colors.backgroundGrey,
    borderRadius: 5,
    marginTop: 15,
    width: "90%",
  },
  blueButton: {
    backgroundColor: theme.colors.backgroundBlue,
    borderRadius: 5,
    width: "90%",
  },
});
