import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../pages/Home";
import PatientsList from "../pages/PatientsList";
import Patient from "../pages/Patient";

const { Navigator, Screen } = createStackNavigator();

function InAppStack() {
  return (
    <Navigator>
      <Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomePage}
      />
      <Screen
        options={{ headerShown: true }}
        name="Patients"
        component={PatientsList}
      />
      <Screen options={{ headerShown: true }} name="Pat" component={Patient} />
    </Navigator>
  );
}

export default InAppStack;
