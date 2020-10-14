import React, { useState, useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingBG from "../pages/Login";
import ForgotPasswordPage from "../pages/ForgotPassword";
import InAppStack from "./AppRoute";
import { UserContext } from "../providers/UserProvider";
import Login from "../pages/Login";
import { View, Image } from "react-native";
import styles from "../pages/Login/styles";
const { Navigator, Screen } = createStackNavigator();

function MainRoutes() {
  const user = useContext(UserContext);
  console.log("na routes", user);

  return (
    <>
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerShown: false,
            headerStyle: { backgroundColor: "transparent" },
            headerTransparent: true,
            headerTintColor: "white",
          }}
        >
          <Screen name="Login" component={Login} />
          <Screen
            options={{
              headerTitle: "",
              headerShown: true,
            }}
            name="forgotPassword"
            component={ForgotPasswordPage}
          />

          <Screen name="Home" component={InAppStack} />
        </Navigator>
      </NavigationContainer>
    </>
  );
}

export default MainRoutes;
