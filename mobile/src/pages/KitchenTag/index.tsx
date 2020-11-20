import React, { useEffect, useState } from "react";
import { View, Text, Platform } from "react-native";
import { IconButton, Surface } from "react-native-paper";
import * as Print from "expo-print";

import Profile from "../../components/Profile";
import styles from "./styles";
import { PatientProfile } from "./../../interfaces/patient.interface";

const KitchenTag: React.FC = ({ navigation, route }: any) => {
  const userInfo = route.params.data;
  const patientData: PatientProfile = route.params.patient;
  console.log(route.params);

  useEffect(() => {
    navigation.setOptions({
      title: userInfo,
    });
  }, []);

  const htmlContent = `
`;

  const createPDF = async (_html?: string) => {
    try {
      const { uri } = await Print.printToFileAsync({
        html: _html,
      });
      return uri;
    } catch (err) {
      console.error(err);
    }
  };
  function printTag() {
    createPDF();
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerTag}>
        <Text style={styles.title}>Etiqueta</Text>
        <IconButton
          icon="printer"
          color="#ffffff"
          size={32}
          style={{ backgroundColor: "#163D42" }}
          onPress={printTag}
        />
      </View>

      <Profile patient_data={patientData} />
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Surface
          style={{
            flex: 1,
            flexDirection: "row",
            padding: 16,
            marginTop: 16,
            marginRight: 8,
          }}
        >
          <View style={{ flex: 1 }}>
            <View>
              <Text style={styles.title}>Alimentação</Text>
              <View style={styles.content}>
                <Text style={styles.contentName}>Dieta</Text>
                <Text style={styles.contentDetail}>
                  {patientData.alimentation?.diet}
                </Text>
              </View>

              <View style={styles.content}>
                <Text style={styles.contentName}>Restrições</Text>
                <Text style={styles.contentDetail}>
                  {patientData.alimentation?.restrictions.geral
                    ? "Geral, "
                    : ""}
                  {patientData.alimentation?.restrictions.halal
                    ? "Halal, "
                    : ""}
                  {patientData.alimentation?.restrictions.kosher
                    ? "Kosher, "
                    : ""}
                  {patientData.alimentation?.restrictions.vegan
                    ? "Vegan, "
                    : ""}
                  {patientData.alimentation?.restrictions.vegetariano
                    ? "Vegetariano."
                    : ""}
                </Text>
              </View>

              <View style={styles.content}>
                <Text style={styles.contentName}>Acompanhante</Text>
                <Text style={styles.contentDetail}>
                  {patientData.alimentation?.acompanhante ? "Sim" : "Não"}
                </Text>
              </View>
            </View>
          </View>
        </Surface>

        <Surface
          style={{
            flex: 1,
            flexDirection: "row",
            padding: 16,
            marginTop: 16,
            marginLeft: 8,
          }}
        >
          <View style={{ flex: 1 }}>
            <View>
              <Text style={[styles.title]}>Observações</Text>
              <View style={styles.content}>
                <Text style={styles.contentDetail}>
                  {patientData.alimentation?.observations}
                </Text>
              </View>
            </View>
          </View>
        </Surface>
      </View>
    </View>
  );
};

export default KitchenTag;
