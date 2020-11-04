import React, { useState } from "react";
import styles from "./styles";
import { View, Text, Picker } from "react-native";
import { DATA, PROFESSIONAL } from "../../services/data/index";
import { useEffect } from "react";
import SearchSection from "../../components/SearchSection";
import TableKitchen from "../../components/TableKitchen";
import { firebaseDataService } from "./../../services/data/index";
import moment from "moment";
import { PatientProfile } from "./../../interfaces/patient.interface";
import Table from "./../../components/Table/index";
import { TextInput } from "react-native-paper";

const Kitchen: React.FC = ({ navigation, route }: any) => {
  const [selectedValue, setSelectedValue] = useState();
  const [DataTable, setdataTable] = useState();
  const [hoursAlimentUpdated, setHoursAlimentUpdated] = useState(4);
  var userInfo = route.params.data;

  useEffect(() => {
    navigation.setOptions({
      title: userInfo,
    });
    getPatientsList(hoursAlimentUpdated);
  }, []);

  function getPatientsList(hoursOffsetAliment: number) {
    firebaseDataService
      .getPatientAlimentationToday(30)
      .then(async (data: any) => {
        data = data.filter((e: PatientProfile) => {
          var _timestamp = e.lastAlimentationUpdate.toDate();
          var diff = moment(new Date()).diff(_timestamp);

          var durationHours = moment.duration(diff).asHours();
          if (parseInt(durationHours.toFixed(0)) > hoursOffsetAliment) {
            return false;
          } else {
            return true;
          }
        });
        setdataTable(data);
      });
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

      {DataTable && <Table dataTable={DataTable} userInfo={userInfo} />}
      {/* <TableKitchen data={DATA} userInfo={userInfo} /> */}
    </View>
  );
};

export default Kitchen;
