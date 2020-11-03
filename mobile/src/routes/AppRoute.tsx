import React from "react";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Button, IconButton } from "react-native-paper";

import Header from "../components/Header/index";

import AdminMenu from "../pages/AdminMenu";
import AdminAddPatient from "../pages/AdminAddPatient";
import AdminCoordMedic from "../pages/AdminCoordMedic";
import AdminCoordGeneral from "../pages/AdminCoordGeneral";
import Kitchen from "../pages/Kitchen";
import KitchenTag from "../pages/KitchenTag";
import Help from "../pages/Help";
import Account from "../pages/Account";
import Clinic from "../pages/Clinic";
import Menu from "../pages/Menu";
import ClinicPatient from "../pages/ClinicPatient";
import About from "../pages/About";
import Configuration from "../pages/Configuration";
import AdminCoordProfileMedic from "../pages/AdminCoordProfileMedic";
import MedicRoute from "./MedicRoute";
import NewPatientRoute from "./NewPatientRoute";
import AdminFoodWaste from "../pages/AdminFoodWaste";
import AdminAddProfessional from "../pages/AdminAddProfessional";
import AdminAddProfessionalGeneral from "../pages/AdminAddProfessionalGeneral";
import AdminCoordPatients from "../pages/AdminCoordPatients";

const { Navigator, Screen } = createStackNavigator();

function AppRoute() {
  const { navigate } = useNavigation();

  return (
    <Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#014146" },
        headerTintColor: "#EDEDED",
        cardStyle: {
          backgroundColor: "#ffffff",
        },
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
        name="ClinicPatient"
        component={ClinicPatient}
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

      <Screen
        name="AdminCoordPatients"
        component={AdminCoordPatients}
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

      <Screen
        name="AdminFoodWaste"
        component={AdminFoodWaste}
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
      <Screen
        name="AdminAddProfessional"
        component={AdminAddProfessional}
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

      <Screen
        name="AdminAddProfessionalGeneral"
        component={AdminAddProfessionalGeneral}
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

      <Screen
        name="AdminCoordProfileMedic"
        component={MedicRoute}
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
      <Screen
        name="AdminCoordMedic"
        component={AdminCoordMedic}
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
      <Screen
        name="AdminCoordGeneral"
        component={AdminCoordGeneral}
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
      <Screen
        name="Kitchen"
        component={Kitchen}
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
        name="KitchenTag"
        component={KitchenTag}
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
