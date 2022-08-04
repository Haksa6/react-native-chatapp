import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Appbar, Avatar } from "react-native-paper";

const Home = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Appbar style={styles.appbar}>
        <Appbar.Action
          icon={"menu"}
          size={30}
          onPress={() => {
            navigation.openDrawer();
          }}
        />
        <Appbar.Content title={"e"} />
      </Appbar>
    </View>
  );
};

export default Home;
