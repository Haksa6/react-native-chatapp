import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login/Login";
import Welcome from "../screens/Welcome/Welcome";
import Register from "../screens/Register/Register";
import DrawerNavigator from "./DrawerNavigator";

const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Root">
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Register" component={Register} />
      <Screen name="Login" component={Login} />
      <Screen name="Root" component={DrawerNavigator} />
    </Navigator>
  </NavigationContainer>
);

export default AppNavigator;