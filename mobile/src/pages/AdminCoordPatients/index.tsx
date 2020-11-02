import React, { useEffect, useState } from "react";
import styles from "./styles";
import { View, Text } from "react-native";
import { FAB } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Table from "../../components/Table";
import SearchSection from "../../components/SearchSection";
import { firebaseDataService } from "./../../services/data/index";
import TableProfessionals from "./../../components/TableProfessionals/index";

const AdminCoordPatients: React.FC = ({ navigation, route }: any) => {
  const [dataTable, setDataTable] = useState([{}]);
  const userInfo = route.params.data;

  useEffect(() => {
    navigation.setOptions({
      title: userInfo,
    });
    firebaseDataService.getPatientsList(30).then((data: any) => {
      setDataTable(data);
    });
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Pacientes</Text>

        <SearchSection />
        {dataTable && (
          <Table dataTable={dataTable} userInfo={userInfo} editPatient />
        )}
      </View>
    </>
  );
};

export default AdminCoordPatients;
