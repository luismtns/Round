import { StatusBar } from "expo-status-bar";
import React from "react";
import UserProvider from "./src/providers/UserProvider";
import MainRoutes from "./src/routes/AuthRoute";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import {
  Assistant_700Bold,
  Assistant_600SemiBold,
  Assistant_400Regular,
  Assistant_300Light,
  useFonts,
} from "@expo-google-fonts/assistant";
import { AppLoading } from "expo";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#376C71",
    accent: "#FFCCBC",
    background: "#F9F9F9",
    onsurface: "#FFFFFF",
    text: "#6F6F6F",
    disabled: "#6F6F6F",
    placeholder: "#014146",
  },
};

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
      <PaperProvider theme={theme}>
        <UserProvider>
          <MainRoutes />
          <StatusBar style="dark" />
        </UserProvider>
      </PaperProvider>
    );
  }
}
