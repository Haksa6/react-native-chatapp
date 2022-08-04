import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Home from "../screens/Home/Home";
import { View, FlatList } from "react-native";
import { Appbar, Avatar, Button } from "react-native-paper";
import AppText from "../components/AppText";
import theme from "../constants/Theme";

const Drawer = createDrawerNavigator();

function DrawerContent() {
  return (
    <View
      style={{
        backgroundColor: theme.colors.backgroundPrimary,
        flex: 1,
        display: "flex",
      }}
    >
      <Appbar
        style={{
          backgroundColor: theme.colors.backgroundThird,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Avatar.Text size={36} label="U" style={{ marginLeft: 6 }} />
        <Appbar.Content title={"Username"} />
        <Avatar.Icon
          icon="logout"
          size={36}
          theme={{ colors: { primary: "transparent" } }}
        />
      </Appbar>
      <View style={{ display: "flex", alignItems: "center" }}>
        <Button
          mode="contained"
          style={{
            backgroundColor: theme.colors.backgroundBlue,
            borderRadius: 5,
            width: "90%",
            marginTop: "5%",
          }}
          onPress={() => {}}
          contentStyle={{ height: 45 }}
        >
          New chat
        </Button>
      </View>
    </View>
  );
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={() => <DrawerContent />}
    >
      <Drawer.Screen name="Home" component={Home}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
