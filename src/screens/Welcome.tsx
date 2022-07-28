import React from "react";
import theme from "../constants/Theme";
import AppText from "../components/AppText";
import Button from "../components/Button";
import { StyleSheet, View, Pressable, Image } from "react-native";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/ChatIcon.png")} style={styles.icon} />
        <AppText.Title style={{ fontWeight: "bold" }}>ChatApp</AppText.Title>
      </View>
      <View style={styles.textContainer}>
        <AppText.Subtitle style={{ fontWeight: "bold" }}>
          Welcome to ChatApp
        </AppText.Subtitle>
        <AppText.Subtext style={{ width: "65%", textAlign: "center" }}>
          Join to connect with your friends and maybe to find some new ones!
        </AppText.Subtext>
        <Button title="Register"></Button>
        <Button.Grey title="Login"></Button.Grey>
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
});

export default Welcome;
