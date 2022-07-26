import React from "react";
import theme from "../constants/Theme";
import AppText from "../components/AppText";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";

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
        <AppText.Subtext style={{ width: "45%", flexWrap: "wrap" }}>
          Join to connect with your friends and maybe to find some new ones!
        </AppText.Subtext>
        <AppText style={styles.button}>Register</AppText>
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
    paddingTop: 100,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 5,
  },
  icon: {
    width: 150,
    height: 120,
  },
  textContainer: {
    flex: 4,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: theme.colors.backgroundBlue,
    width: "90%",
    height: 50,
    color: theme.colors.textPrimary,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});

export default Welcome;
