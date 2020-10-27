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

export interface PatientProps {
  patient: {
    id: string;
    name: string;
    ra: string;
    andar: string;
    quarto: string;
  };
}

const ClinicPatient = (props: any) => {
  const { patient }: PatientProps = props.route.params;

  const [visible, setVisible] = React.useState(false);
  const closeMenu = () => setVisible(false);
  const openMenu = () => setVisible(true);

  useEffect(() => {
    props.navigation.setOptions({
      title: PROFESSIONAL,
    });
  }, []);

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
