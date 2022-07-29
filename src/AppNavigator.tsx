import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login/Login";
import Welcome from "./screens/Welcome/Welcome";
import Register from "./screens/Register/Register";
const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Welcome"
    >
      <Screen name="Welcome" component={Welcome}></Screen>
      <Screen name="Register" component={Register}></Screen>
      <Screen name="Login" component={Login}></Screen>
    </Navigator>
  </NavigationContainer>
);

export default AppNavigator;
