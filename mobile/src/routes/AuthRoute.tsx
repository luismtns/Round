import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ForgotPasswordPage from "../pages/ForgotPassword";
import AppRoute from "./AppRoute";
import { UserContext } from "../providers/UserProvider";
import Login from "../pages/Login";

const { Navigator, Screen } = createStackNavigator();

function AuthRoute() {
  const user = useContext(UserContext);

  if (!user) {
    return (
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerShown: false,
            headerStyle: { backgroundColor: "transparent" },
            headerTransparent: true,
            headerTintColor: "white",
            title: "Round",
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
        </Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: { backgroundColor: "transparent" },
          headerTransparent: true,
          headerTintColor: "white",
        }}
      >
        <Screen name="Home" component={AppRoute} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AuthRoute;
