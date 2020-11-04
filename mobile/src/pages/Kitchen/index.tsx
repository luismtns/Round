import React, { useState } from "react";
import styles from "./styles";
import { View, Text, Picker } from "react-native";
import { useEffect } from "react";
import SearchSection from "../../components/SearchSection";
import { firebaseDataService } from "./../../services/data/index";
import moment from "moment";
import { PatientProfile } from "./../../interfaces/patient.interface";
import Table from "./../../components/Table/index";

const Kitchen: React.FC = ({ navigation, route }: any) => {
  const [selectedValue, setSelectedValue] = useState();
  const [DataTable, setdataTable] = useState();
  const [hoursAlimentUpdated, setHoursAlimentUpdated] = useState(4);
  var userInfo = route.params.data;

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
  }, [setdataTable]);

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
    setdataTable(query);
  }

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ width: "100%", height: 40, marginBottom: 12 }}
        onValueChange={setSelectedValue}
      >
        <Picker.Item label="Selecione" value={""} />
        <Picker.Item label="Lorem" value="lorem" />
        <Picker.Item label="Lorem" value="lorem" />
        <Picker.Item label="Lorem" value="lorem" />
        <Picker.Item label="Lorem" value="lorem" />
        <Picker.Item label="Lorem" value="lorem" />
        <Picker.Item label="Lorem" value="lorem" />
      </Picker>
      <Text style={styles.title}>Pacientes</Text>

      <SearchSection />

      {DataTable && <Table dataTable={DataTable} userInfo={userInfo} kitchen />}
    </View>
  );
};

export default Kitchen;
