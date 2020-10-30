import React, { useState, useEffect } from "react";
import { View, Text, Picker } from "react-native";
import styles from "./styles";

import { PROFESSIONAL } from "../../services/data/index";
import {
  Avatar,
  Surface,
  TextInput,
  Switch,
  Button,
  Chip,
  Menu,
  IconButton,
} from "react-native-paper";
import { colors, text, theme } from "../../styles/theme.style";
import Profile from "../../components/Profile";
import Historic from "../../components/Historic";
import ProfileForm from "../../components/ProfileForm";
import { useFocusEffect } from "@react-navigation/native";
import { firebaseDataService } from "./../../services/data/index";

const ClinicPatient = (props: any) => {
  const patient_uuid = props.route.params.patient;
  useEffect(() => {
    props.navigation.setOptions({
      title: PROFESSIONAL,
    });
  }, []);
  useFocusEffect(() => {
    firebaseDataService.getPatient(patient_uuid).then((data: any) => {
      console.log(data.data());
    });
  });

  return (
    <>
      <View style={styles.container}>
        <Profile />

        <View style={styles.containerDataAndHistory}>
          <ProfileForm />
          <Historic />
        </View>
      </View>
    </>
  );
};

export default ClinicPatient;
