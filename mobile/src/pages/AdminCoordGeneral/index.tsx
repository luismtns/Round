import React, { useState } from "react";
import styles from "./styles";

import { View, Text } from "react-native";
import {
  Button,
  DataTable,
  FAB,
  Menu,
  Provider,
  Searchbar,
} from "react-native-paper";
import { DATA, PROFESSIONAL } from "../../services/data/index";
import { useNavigation } from "@react-navigation/native";
import Table from "../../components/Table";
import SearchSection from "../../components/SearchSection";

const AdminCoordGeneral: React.FC = () => {
  const { navigate } = useNavigation();
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  function goToPatient(id: any) {
    // navigate(`Patient`, { patient: id });
  }

  function goToAddNewProfessional() {
    navigate("AdminAddProfessionalGeneral");
  }

  return (
    <>
      <FAB
        style={styles.fab}
        small
        label="Adicionar"
        icon="plus"
        onPress={goToAddNewProfessional}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Equipe geral</Text>
        <SearchSection />
        <Table data={DATA} professional />
      </View>
    </>
  );
};

export default AdminCoordGeneral;
