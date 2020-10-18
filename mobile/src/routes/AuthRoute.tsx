import React, {useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ForgotPasswordPage from "../pages/ForgotPassword";
import AppRoute from "./AppRoute";
import { UserContext } from "../providers/UserProvider";
import Login from "../pages/Login";
import { Firebase } from './../integrations/firebase';
const { Navigator, Screen } = createStackNavigator();

function AuthRoute() {
  // const user = useContext(UserContext);
  // console.log("na routes", user);

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user:any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = Firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
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
