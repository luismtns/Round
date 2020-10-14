import React, { useState, useContext, useEffect } from "react";
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
import { DATA, PROFESSIONAL } from "../../services/data/index";

export interface PatientProps {
  patient: {
    id: string;
    name: string;
    ra: string;
    andar: string;
    quarto: string;
  };
}

const Patient = (props: any) => {
  const { patient }: PatientProps = props.route.params;

  useEffect(() => {
    props.navigation.setOptions({
      title: PROFESSIONAL,
    });
  }, []);

  console.log(props);
  return (
    <>
      <Text>ID: {patient.id}</Text>
      <Text>Nome: {patient.name}</Text>
      <Text>RA: {patient.ra}</Text>
      <Text>Andar: {patient.andar}</Text>
      <Text>Quarto: {patient.quarto}</Text>
    </>
  );
};

export default Patient;
