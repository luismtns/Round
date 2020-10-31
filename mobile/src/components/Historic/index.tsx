import moment from "moment";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Avatar, IconButton, Surface, Text } from "react-native-paper";
import { firebaseDataService } from "../../services/data";
import { colors, text } from "../../styles/theme.style";
import styles from "./styles";

const Historic = ({ patientData, uuid }: any) => {
  const [patientHistoric, setPatientHistoric] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  if (patientData) {
    if (patientData.personal && patientData.personal.observation) {
      var patientObservations = patientData.personal.observation;
    }
  }

  useEffect(() => {
    // props.navigation.setOptions({
    //   title: PROFESSIONAL,
    // });
    getHistoricList();
  }, []);

  function getHistoricList() {
    firebaseDataService.getHistoric(uuid).then(async (data: any) => {
      setPatientHistoric(data);
      setIsFetching(true);
    });
  }

  return (
    <Surface style={styles.containerPatientHistory}>
      <Text
        style={[styles.title, { fontSize: text.text3, color: colors.gray }]}
      >
        Histórico do paciente
      </Text>
      <View style={styles.historic}>
        <Text style={styles.titleHistoric}>
          {moment(patientData.timestamp.toDate()).format("DD/MM/YYYY")}
        </Text>
        <Text style={styles.content}>
          {moment(patientData.timestamp.toDate()).format("HH:mm:ss")} - Entrada
        </Text>
      </View>
      {patientHistoric &&
        patientHistoric.map((elm: any) => {
          return (
            <View key={elm.timestamp} style={styles.historic}>
              <Text style={styles.titleHistoric}>
                {elm.timestamp &&
                  moment(elm.timestamp.toDate()).format("DD/MM/YYYY")}
              </Text>
              <Text style={styles.content}>
                {moment(elm.timestamp.toDate()).format("hh:mm:ss")} -{" "}
                {elm.observations}
              </Text>
            </View>
          );
        })}

      <View style={styles.observations}>
        <Text style={styles.titleHistoric}>Observações</Text>
        <Text style={styles.content}>
          {patientData ? patientObservations : ""}
        </Text>
      </View>
    </Surface>
  );
};

export default Historic;
