import React from 'react';

import { theme } from './src/styles/theme.style';
import { Provider as PaperProvider } from 'react-native-paper';

import AuthRoute from './src/routes/AuthRoute';
import UserProvider from './src/providers/UserProvider';

import { StatusBar } from 'expo-status-bar';
import {
  Assistant_700Bold,
  Assistant_600SemiBold,
  Assistant_400Regular,
  Assistant_300Light,
  useFonts,
} from '@expo-google-fonts/assistant';
import { AppLoading } from 'expo';
import './src/styles/global.css';

import { View, Text } from 'react-native';

const App = () => {
  let [fontsLoaded] = useFonts({
    Assistant_700Bold,
    Assistant_600SemiBold,
    Assistant_400Regular,
    Assistant_300Light,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#014146',
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontFamily: 'Assistant_400Regular',
          }}
        >
          Acesse pelo desktop ou baixe nosso app
        </Text>
      </View>
    );
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
};

export default App;
