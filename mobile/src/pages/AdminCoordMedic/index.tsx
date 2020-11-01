import React, { useEffect, useState } from "react";
import styles from "./styles";
import { View, Text } from "react-native";
import { FAB } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Table from "../../components/Table";
import SearchSection from "../../components/SearchSection";
import { firebaseDataService } from "./../../services/data/index";

const AdminCoordMedic: React.FC = ({ route, navigation }: any) => {
  const { navigate } = useNavigation();
  const userInfo = route.params.data;
  const [dataTable, setDataTable] = useState([{}]);

  function goToPatient(id: any) {
    // navigate(`Patient`, { patient: id });
  }
  useEffect(() => {
    firebaseDataService.getProfessionalList(30).then((data: any) => {
      setDataTable(data);
    });
    navigation.setOptions({
      title: userInfo,
    });
  }, []);

  function goToAdminAddProfessional() {
    navigate(`AdminAddProfessional`, { data: userInfo });
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
        <Table data={dataTable} professional userInfo={userInfo} />
      </View>
    </>
  );
};

export default AdminCoordMedic;
