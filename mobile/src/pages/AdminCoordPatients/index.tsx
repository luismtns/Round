import React, { useEffect, useState } from "react";
import styles from "./styles";
import { View, Text } from "react-native";
import { FAB } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Table from "../../components/Table";
import SearchSection from "../../components/SearchSection";
import { firebaseDataService } from "./../../services/data/index";
import TableProfessionals from "./../../components/TableProfessionals/index";
import { PatientProfile } from "./../../interfaces/patient.interface";

const AdminCoordPatients: React.FC = ({ navigation, route }: any) => {
  const [dataTable, setDataTable] = useState([{}]);
  const [search, setSearch] = useState<any>();
  const userInfo = route.params.data;

  function filterData(childData: string) {
    setDataTable(
      search?.filter(function (data: PatientProfile) {
        return (
          data.personal.name.toLowerCase().indexOf(childData.toLowerCase()) >
            -1 || data.hospitalization.rh == childData.toLowerCase().trim()
        );
      })
    );
  }

  useEffect(() => {
    navigation.setOptions({
      title: userInfo,
    });
    // Table Data Observable
    const unsubscribe = firebaseDataService.getPatientSnapshot(30, {
      next: (querySnapshot: any) => {
        var arrayQuery = querySnapshot.docs.map((doc: any) => {
          var data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        setDataTable(arrayQuery);
        setSearch(arrayQuery);
      },
      error: (err: any) => console.log(err),
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Pacientes</Text>

        <SearchSection searchProp={filterData} />
        {dataTable && (
          <Table dataTable={dataTable} userInfo={userInfo} editPatient />
        )}
      </View>
    </>
  );
};

export default AdminCoordPatients;
