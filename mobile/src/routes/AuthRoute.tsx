import React, { useState, useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "../pages/Landing";
import ForgotPasswordPage from "../pages/ForgotPassword";
import InAppStack from "./AppRoute";
import { UserContext } from "../providers/UserProvider";
const { Navigator, Screen } = createStackNavigator();

function MainRoutes() {
  const user = useContext(UserContext);
  console.log("na routes", user);

  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen
          name="Landing"
          options={{
            headerTitle: "Login",
          }}
          component={Landing}
        />
        <Screen
          options={{
            headerShown: true,
            headerTitle: "Recuperar acesso",
          }}
          name="forgotPassword"
          component={ForgotPasswordPage}
        />
        <Screen name="Home" component={InAppStack} />
      </Navigator>
    </NavigationContainer>
  );
}

export default MainRoutes;
