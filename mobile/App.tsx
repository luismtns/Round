import React from "react";

import { theme } from "./src/styles/theme.style";
import { Provider as PaperProvider } from "react-native-paper";

import AuthRoute from "./src/routes/AuthRoute";
import UserProvider from "./src/providers/UserProvider";

import { StatusBar } from "expo-status-bar";
import {
  Assistant_700Bold,
  Assistant_600SemiBold,
  Assistant_400Regular,
  Assistant_300Light,
  useFonts,
} from "@expo-google-fonts/assistant";
import { AppLoading } from "expo";
import "./src/styles/global.css";

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
        <PaperProvider theme={theme}>
          <AuthRoute />
          <StatusBar style="dark" />
        </PaperProvider>
      </UserProvider>
    );
  }
}
