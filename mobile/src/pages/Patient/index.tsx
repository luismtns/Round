import React, { useState, useContext } from "react";
import { View, Text, Picker, FlatList } from "react-native";
import styles from "./styles";
import MainInput from "../../components/MainInput";
import { StatusBar } from "expo-status-bar";
import {
  DefaultRouterOptions,
  RouteProp,
  useNavigation,
} from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { UserContext } from "../../providers/UserProvider";
import Card from "../../components/Card";
import MainModal from "../../components/Modal";
import SearchBarComponent from "../../components/SearchBar";

export interface PatientProps {
  patient: {
    id: string;
    name: string;
    ra: string;
    andar: string;
    quarto: string;
  };
}

function Patient({ route }: any) {
  const { patient }: PatientProps = route.params;

  return (
    <>
      <Text>ID: {patient.id}</Text>
      <Text>Nome: {patient.name}</Text>
      <Text>RA: {patient.ra}</Text>
      <Text>Andar: {patient.andar}</Text>
      <Text>Quarto: {patient.quarto}</Text>
    </>
  );
}

export default Patient;
