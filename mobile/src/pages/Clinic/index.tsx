import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { PROFESSIONAL } from "../../services/data/index";
import SearchSection from "../../components/SearchSection";
import Table from "../../components/Table";
import { firebaseDataService } from "./../../services/data/index";

const Clinic = ({ navigation }: any) => {
  const [dataTable, setDataTable] = useState([{}]);

  useEffect(() => {
    navigation.setOptions({
      title: PROFESSIONAL,
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
        <Table data={dataTable} />
      </View>
    </>
  );
};

export default Clinic;
