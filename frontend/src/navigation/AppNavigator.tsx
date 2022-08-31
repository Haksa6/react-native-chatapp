import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Welcome from "../screens/Welcome";
import Register from "../screens/Register";
import AddNewUser from "../screens/AddNewUser";
import DrawerNavigator from "./DrawerNavigator";
import NewChannel from "../screens/NewChannel";

const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Root">
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Register" component={Register} />
      <Screen name="Login" component={Login} />
      <Screen name="Root" component={DrawerNavigator} />
      <Screen name="AddNewUser" component={AddNewUser} />
      <Screen name="NewChannel" component={NewChannel} />
    </Navigator>
  </NavigationContainer>
);

export default AppNavigator;
