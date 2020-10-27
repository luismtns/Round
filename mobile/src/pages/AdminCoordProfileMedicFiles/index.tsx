import React from "react";
import { View } from "react-native";
import { FAB } from "react-native-paper";
import Profile from "../../components/Profile";
import styles from "./styles";
// import { Container } from './styles';

const AdminCoordProfileMedicFiles: React.FC = () => {
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

export default AdminCoordProfileMedicFiles;
