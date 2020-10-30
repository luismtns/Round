import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { DATA, PROFESSIONAL } from "../../services/data/index";
import SearchSection from "../../components/SearchSection";
import Table from "../../components/Table";
import { useFocusEffect } from "@react-navigation/native";
import { firebaseDataService } from "./../../services/data/index";

const Clinic = ({ navigation }: any) => {
  // var data_table: any[] = [];
  const [dataTable, setDataTable] = useState([{}]);

  useEffect(() => {
    navigation.setOptions({
      title: PROFESSIONAL,
    });
  }, []);

  useFocusEffect(() => {
    firebaseDataService.getPatientsList(30).then((data: any) => {
      setDataTable(data);
    });
  });
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
