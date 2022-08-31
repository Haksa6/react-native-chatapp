import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Home from "../screens/Home";
import DrawerContent from "../components/DrawerContent";

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ navigation }: any) => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={() => <DrawerContent navigation={navigation} />}
    >
      <Drawer.Screen name="Home" component={Home}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
