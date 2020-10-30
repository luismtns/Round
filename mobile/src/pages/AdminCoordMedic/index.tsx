import React, { useState } from "react";
import styles from "./styles";
import { useFocusEffect } from "@react-navigation/native";

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
import { firebaseDataService } from "./../../services/data/index";

const AdminCoordMedic: React.FC = () => {
  const { navigate } = useNavigation();
  const [dataTable, setDataTable] = useState([{}]);
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  function goToPatient(id: any) {
    // navigate(`Patient`, { patient: id });
  }
  useFocusEffect(() => {
    firebaseDataService.getProfessionalList(30).then((data: any) => {
      setDataTable(data);
    });
  });

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
        <Table data={dataTable} medic />
      </View>
    </>
  );
};

export default AdminCoordMedic;
