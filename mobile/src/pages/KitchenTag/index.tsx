import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { IconButton, Surface } from "react-native-paper";
import Profile from "../../components/Profile";
import styles from "./styles";

const KitchenTag: React.FC = ({ navigation, route }: any) => {
  const [patient_data, setPatientData] = useState({});
  const userInfo = route.params.data;

  useEffect(() => {
    navigation.setOptions({
      title: userInfo,
    });
  }, []);

  function printTag() {
    console.log("Pressed");
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
          onPress={() => printTag}
        />
      </View>

      <Profile patient_data={patient_data} />
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
                <Text style={styles.contentDetail}></Text>
              </View>

              <View style={styles.content}>
                <Text style={styles.contentName}>Alergias e Intolerâncias</Text>
                <Text style={styles.contentDetail}></Text>
              </View>

              <View style={styles.content}>
                <Text style={styles.contentName}>Restrições</Text>
                <Text style={styles.contentDetail}></Text>
              </View>

              <View style={styles.content}>
                <Text style={styles.contentName}>Acompanhante</Text>
                <Text style={styles.contentDetail}></Text>
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
                <Text style={styles.contentName}>E-mail</Text>
                <Text style={styles.contentDetail}></Text>
              </View>
            </View>
          </View>
        </Surface>
      </View>
    </View>
  );
};

export default KitchenTag;
