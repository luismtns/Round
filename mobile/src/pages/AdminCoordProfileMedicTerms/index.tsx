import React from "react";
import { View } from "react-native";
import { FAB } from "react-native-paper";
import Profile from "../../components/Profile";
import styles from "./styles";
// import { Container } from './styles';

const AdminCoordProfileMedicTerms: React.FC = () => {
  return (
    <>
      <Profile />
      <FAB
        style={styles.fab}
        label="Editar"
        small
        icon="pencil"
        onPress={() => console.log("Pressed")}
      />
    </>
  );
};

export default AdminCoordProfileMedicTerms;
