import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AdminCoordProfileMedic from "../pages/AdminCoordProfileMedic";
import AdminCoordProfileMedicDocs from "../pages/AdminCoordProfileMedicDocs";
import AdminCoordProfileMedicTerms from "../pages/AdminCoordProfileMedicTerms";
import AdminCoordProfileMedicFiles from "../pages/AdminCoordProfileMedicFiles";
import { colors } from "../styles/theme.style";
import AdminAddPatient from "../pages/AdminAddPatient";

const Tab = createMaterialTopTabNavigator();

function NewPatientRoute() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: { backgroundColor: colors.primary },
        activeTintColor: colors.white,
        inactiveTintColor: "rgba(255,255,255,0.5)",
        indicatorStyle: { backgroundColor: colors.white },
      }}
    >
      <Tab.Screen name="Cadastro" component={AdminAddPatient} />
      <Tab.Screen
        name="Upload de Arquivos"
        component={AdminCoordProfileMedicDocs}
      />
    </Tab.Navigator>
  );
}

export default NewPatientRoute;
