import React from "react";
import AppText from "../../components/AppText";
import { Button } from "react-native-paper";
import { View, Image } from "react-native";
import { styles } from "./styles";

const Welcome = ({ navigation }: any) => {
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
          onPress={() => navigation.navigate("Register")}
          contentStyle={{ height: 45 }}
        >
          Register
        </Button>
        <Button
          mode="contained"
          style={styles.greyButton}
          onPress={() => navigation.navigate("Login")}
          contentStyle={{ height: 45 }}
        >
          Login
        </Button>
      </View>
    </View>
  );
};

export default Welcome;
