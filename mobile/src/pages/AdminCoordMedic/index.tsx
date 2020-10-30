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
import { DATA } from "../../services/data/index";
import { useNavigation } from "@react-navigation/native";
import Table from "../../components/Table";
import SearchSection from "../../components/SearchSection";

const AdminCoordMedic: React.FC = () => {
  const { navigate } = useNavigation();
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  function goToPatient(id: any) {
    // navigate(`Patient`, { patient: id });
  }

  function goToAdminAddProfessional() {
    navigate(`AdminAddProfessional`);
  }

  return (
    <>
      <FAB
        style={styles.fab}
        small
        label="Adicionar"
        icon="plus"
        onPress={goToAdminAddProfessional}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Equipe médica</Text>

        <SearchSection />
        <Table data={DATA} medic />
      </View>
    </>
  );
};

export default AdminCoordMedic;
