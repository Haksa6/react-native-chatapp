import React from "react";
import theme from "../../constants/Theme";
import AppText from "../../components/AppText";
import { Button } from "react-native-paper";
import { StyleSheet, View, Image } from "react-native";

const Welcome = (navigation: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/ChatIcon.png")}
          style={styles.icon}
        />
        <AppText.Title>ChatApp</AppText.Title>
      </View>
      <View style={styles.textContainer}>
        <AppText.Subtitle>Welcome to ChatApp</AppText.Subtitle>
        <AppText.Subtext
          style={{ width: "65%", textAlign: "center", marginBottom: 35 }}
        >
          Join to connect with your friends and maybe to find some new ones!
        </AppText.Subtext>
        <Button
          mode="contained"
          style={styles.blueButton}
          onPress={() => console.log("hey")}
          contentStyle={{ height: 40 }}
        >
          Register
        </Button>
        <Button
          mode="contained"
          style={styles.greyButton}
          onPress={() => console.log("hey")}
          contentStyle={{ height: 40 }}
        >
          Login
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Welcome;
