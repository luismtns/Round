import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AdminCoordProfileMedic from "../pages/AdminCoordProfileMedic";
import AdminCoordProfileMedicDocs from "../pages/AdminCoordProfileMedicDocs";
import AdminCoordProfileMedicTerms from "../pages/AdminCoordProfileMedicTerms";
import AdminCoordProfileMedicFiles from "../pages/AdminCoordProfileMedicFiles";
import { colors } from "../styles/theme.style";

const Tab = createMaterialTopTabNavigator();

function MedicRoute({ navigation, route }: any) {
  const userInfo = route.params.params.data;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: userInfo,
    });
  }, []);

  return (
    <Tab.Navigator
      tabBarOptions={{
        style: { backgroundColor: colors.primary },
        activeTintColor: colors.white,
        inactiveTintColor: "rgba(255,255,255,0.5)",
        indicatorStyle: { backgroundColor: colors.white },
      }}
      initialRouteName="Informações Gerais"
    >
      <Tab.Screen
        name="Informações Gerais"
        component={AdminCoordProfileMedic}
      />
      <Tab.Screen
        name="DOCUMENTOS PESSOAIS"
        component={AdminCoordProfileMedicDocs}
      />
      <Tab.Screen
        name="TERMOS E CONTRATOS"
        component={AdminCoordProfileMedicTerms}
      />
      <Tab.Screen name="ARQUIVOS" component={AdminCoordProfileMedicFiles} />
    </Tab.Navigator>
  );
}

export default MedicRoute;
