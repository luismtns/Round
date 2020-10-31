import React, { useEffect, useState } from "react";
import styles from "./styles";
import { View, Text } from "react-native";
import { FAB } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Table from "../../components/Table";
import SearchSection from "../../components/SearchSection";
import { firebaseDataService } from "./../../services/data/index";

const AdminCoordMedic: React.FC = () => {
  const { navigate } = useNavigation();
  const [dataTable, setDataTable] = useState([{}]);

  function goToPatient(id: any) {
    // navigate(`Patient`, { patient: id });
  }
  useEffect(() => {
    firebaseDataService.getProfessionalList(30).then((data: any) => {
      setDataTable(data);
    });
  }, []);

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
        <Table data={dataTable} professional />
      </View>
    </>
  );
};

export default AdminCoordMedic;
