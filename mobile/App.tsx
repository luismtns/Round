import { StatusBar } from "expo-status-bar";
import React from "react";
import UserProvider from "./src/providers/UserProvider";
import MainRoutes from "./src/routes/AuthRoute";
import {
  Assistant_700Bold,
  Assistant_600SemiBold,
  Assistant_400Regular,
  Assistant_300Light,
  useFonts,
} from "@expo-google-fonts/assistant";
import { AppLoading } from "expo";

export default function App() {
  let [fontsLoaded] = useFonts({
    Assistant_700Bold,
    Assistant_600SemiBold,
    Assistant_400Regular,
    Assistant_300Light,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <UserProvider>
        <MainRoutes />
        <StatusBar style="dark" />
      </UserProvider>
    );
  }
}
