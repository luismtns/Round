import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import SearchSection from "../../components/SearchSection";
import Table from "../../components/Table";
import { firebaseDataService } from "./../../services/data/index";
import { useIsFocused } from "@react-navigation/native";

const Clinic = ({ navigation, route }: any) => {
  const [dataTable, setDataTable] = useState();
  const userInfo = route.params.data;

  const isVisible = useIsFocused();

  useEffect(() => {
    navigation.setOptions({
      title: userInfo,
    });
    firebaseDataService.getPatientsList(30).then((data: any) => {
      setDataTable(data);
    });
  }, [isVisible]);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Pacientes</Text>

        <SearchSection />
        {dataTable && <Table dataTable={dataTable} userInfo={userInfo} />}
      </View>
    </>
  );
};

export default Clinic;
