import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native-paper";
import HomePage from "../pages/Menu";
import Patient from "../pages/Patient";
import About from "../pages/About";
import Configuration from "../pages/Configuration";
import Help from "../pages/Help";
import Account from "../pages/Account";
import Clinic from "../pages/Clinic";
import Menu from "../pages/Menu";
import Header from "../components/Header/index";
import { useNavigation } from "@react-navigation/native";

const { Navigator, Screen } = createStackNavigator();

function AppRoute() {
  const { navigate } = useNavigation();

  return (
    <Navigator>
      <Screen options={{ headerShown: false }} name="Menu" component={Menu} />
      <Screen
        name="Clinic"
        component={Clinic}
        options={{
          headerTitle: (props) => <Header {...props} />,
          headerLeft: (props) => null,
          headerRight: () => (
            <Button onPress={() => navigate("Menu")} icon="logout" color="#010">
              Sair
            </Button>
          ),
        }}
      />
      <Screen
        options={{
          headerTitle: (props) => <Header {...props} />,
          headerLeft: (props) => null,
          headerRight: () => (
            <Button onPress={() => navigate("Menu")} icon="logout" color="#010">
              Sair
            </Button>
          ),
        }}
        name="Patient"
        component={Patient}
      />

      <Screen name="Configuration" component={Configuration} />
      <Screen name="About" component={About} />
      <Screen name="Help" component={Help} />
      <Screen name="Account" component={Account} />
    </Navigator>
  );
}

export default AppRoute;
