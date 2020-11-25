import React, { useState } from "react";
import styles from "./styles";
import { View, Text, Picker } from "react-native";
import moment from "moment";
import { useEffect } from "react";
import SearchSection from "../../components/SearchSection";
import { firebaseDataService } from "./../../services/data/index";
import { PatientProfile } from "./../../interfaces/patient.interface";
import Table from "./../../components/Table/index";
import EmptyAlert from "../../components/EmptyAlert";

const Kitchen: React.FC = ({ navigation, route }: any) => {
  const [selectedValue, setSelectedValue] = useState();
  const [DataTable, setDataTable] = useState<PatientProfile[]>([]);
  const [search, setSearch] = useState<any>();
  const [hoursAlimentUpdated, setHoursAlimentUpdated] = useState(4);

  var userInfo = route.params.data;

  function filterData({ patient, filter }: any) {
    // console.log(patient, filter, search);
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
              return new Date(b.lastAlimentationUpdate.toDate()) <
                new Date(a.lastAlimentationUpdate.toDate())
                ? -1
                : 1;
            case "A-Z":
              return a.personal.name.localeCompare(b.personal.name);
          }
        })
    );
  }

  useEffect((): any => {
    navigation.setOptions({
      title: userInfo,
    });
    // Table Data Observable
    const unsubscribe = firebaseDataService.getPatientSnapshot(30, {
      next: (querySnapshot: any) => {
        var _querySnapshot = querySnapshot.docs
          .map((doc: any) => {
            if (doc.exists && doc.data().alimentation) {
              return doc.data();
            }
          })
          .filter((e: any) => (e ? true : false));

        timeTableRules(_querySnapshot, hoursAlimentUpdated);
      },
      error: (err: any) => console.log(err),
    });
    return unsubscribe;
  }, [setDataTable]);

  function timeTableRules(query: any, hoursOffsetAliment: number) {
    query = query.filter((e: PatientProfile) => {
      var _timestamp = e.lastAlimentationUpdate.toDate();
      var diff = moment(new Date()).diff(_timestamp);

      var durationHours = moment.duration(diff).asHours();
      if (parseInt(durationHours.toFixed(0)) > hoursOffsetAliment) {
        return false;
      } else {
        return true;
      }
    });
    setDataTable(query);
    setSearch(query);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pacientes</Text>

      <SearchSection searchProp={filterData} />

      {!DataTable || DataTable.length < 1 ? (
        <EmptyAlert />
      ) : (
        <Table dataTable={DataTable} userInfo={userInfo} kitchen />
      )}
    </View>
  );
};

export default Kitchen;
