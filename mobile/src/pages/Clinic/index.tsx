import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import SearchSection from "../../components/SearchSection";
import Table from "../../components/Table";
import { firebaseDataService } from "./../../services/data/index";
import { useIsFocused } from "@react-navigation/native";
import { PatientProfile } from "./../../interfaces/patient.interface";

const Clinic = ({ navigation, route }: any) => {
  const [dataTable, setDataTable] = useState();
  const userInfo = route.params.data;
  const [search, setSearch] = useState<any>();
  const isVisible = useIsFocused();

  function filterData({ patient, filter }: any) {
    console.log(patient, filter);
    setDataTable(
      search
        ?.filter((data: PatientProfile) => {
          return (
            data.personal.name.toLowerCase().indexOf(patient.toLowerCase()) >
              -1 || data.hospitalization.rh == patient.toLowerCase().trim()
          );
        })
        .sort((a: any, b: any) => {
          switch (filter) {
            case "Recentes":
              let fixDateA = a.hospitalization.entryDate.replace(
                /(.{3})(.{3})(.{4})/,
                "$2$1$3"
              );

              let fixDateB = b.hospitalization.entryDate.replace(
                /(.{3})(.{3})(.{4})/,
                "$2$1$3"
              );

              return new Date(fixDateB) < new Date(fixDateA) ? -1 : 1;
            case "A-Z":
              return a.personal.name.localeCompare(b.personal.name);
          }
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
  }, [setDataTable, isVisible]);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Pacientes</Text>

        <SearchSection searchProp={filterData} />
        {console.log(dataTable)}
        {dataTable && <Table dataTable={dataTable} userInfo={userInfo} />}
      </View>
    </>
  );
};

export default Clinic;
