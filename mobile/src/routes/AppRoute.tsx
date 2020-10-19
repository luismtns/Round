import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, IconButton } from "react-native-paper";
import Patient from "../pages/Patient";
import About from "../pages/About";
import Configuration from "../pages/Configuration";
import Help from "../pages/Help";
import Account from "../pages/Account";
import Clinic from "../pages/Clinic";
import Menu from "../pages/Menu";
import Header from "../components/Header/index";
import { useNavigation } from "@react-navigation/native";
import AdminMenu from "../pages/AdminMenu";
import AdminAddPatient from "../pages/AdminAddPatient";

const { Navigator, Screen } = createStackNavigator();

function AppRoute() {
  const { navigate } = useNavigation();

  return (
    <Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#014146" },
        headerTintColor: "#EDEDED",
      }}
    >
      <Screen name="Menu" component={Menu} options={{ headerShown: false }} />
      <Screen
        name="Clinic"
        component={Clinic}
        options={{
          headerTitle: (props) => <Header {...props} />,
          headerLeft: (props) => null,
          headerRight: () => (
            <Button
              onPress={() => navigate("Menu")}
              icon="logout"
              color="#659A9F"
            >
              Sair
            </Button>
          ),
        }}
      />
      <Screen
        options={{
          headerTitle: (props) => <Header {...props} />,

          headerRight: () => (
            <Button
              onPress={() => navigate("Menu")}
              icon="logout"
              color="#659A9F"
            >
              Sair
            </Button>
          ),
        }}
        name="Patient"
        component={Patient}
      />

      <Screen
        name="Configuration"
        options={{ headerTitle: "Configurações" }}
        component={Configuration}
      />
      <Screen
        name="About"
        component={About}
        options={{ headerTitle: "Sobre" }}
      />
      <Screen name="Help" component={Help} options={{ headerTitle: "Ajuda" }} />
      <Screen
        name="Account"
        component={Account}
        options={{
          headerTitle: "Conta",
          headerRight: () => (
            <IconButton
              onPress={() => navigate("Menu")}
              icon="pencil"
              color="#EDEDED"
            />
          ),
        }}
      />

      <Screen
        name="AdminMenu"
        component={AdminMenu}
        options={{
          headerTitle: (props) => <Header {...props} />,
          headerLeft: (props) => null,
          headerRight: () => (
            <Button
              onPress={() => navigate("Menu")}
              icon="logout"
              color="#659A9F"
            >
              Sair
            </Button>
          ),
        }}
      />
      <Screen
        name="AdminAddPatient"
        component={AdminAddPatient}
        options={{
          headerTitle: (props) => <Header {...props} />,
          headerRight: () => (
            <Button
              onPress={() => navigate("Menu")}
              icon="logout"
              color="#659A9F"
            >
              Sair
            </Button>
          ),
        }}
      />
    </Navigator>
  );
}

export default AppRoute;
