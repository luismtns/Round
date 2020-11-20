import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { IconButton, Surface } from "react-native-paper";
import DialogPrimary from "../../components/DialogPrimary";
import Profile from "../../components/Profile";
import styles from "./styles";
import { PatientProfile } from "./../../interfaces/patient.interface";

const KitchenTag: React.FC = ({ navigation, route }: any) => {
  const patient_data = route.params.professional;
  const userInfo = route.params.data;
  const [Dialog, setDialog] = useState({
    title: "",
    label: "",
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      title: userInfo,
    });
  }, []);

  function printTag() {
    console.log("Pressed");
    setOpen(true);
    setDialog({
      title: "Imprimir etiqueta",
      label: `Deseja mesmo imprimir a etiqueta de ${patient_data.personal.name}?`,
    });
  }

  // FILTER RESTRICTIONS
  let filtered: any = Object.keys(
    patient_data.alimentation.restrictions
  ).filter(function (key) {
    return patient_data.alimentation.restrictions[key];
  });

  return (
    <>
      <DialogPrimary
        show={open}
        title={Dialog.title}
        paragraph={Dialog.label}
        button="Voltar"
        onAction={() => {
          setOpen(false);
        }}
        buttonAction="Imprimir"
        hide={() => {
          setOpen(false);
        }}
      />
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
                  <Text style={styles.contentDetail}>
                    {patient_data.alimentation.diet}
                  </Text>
                </View>

                <View style={styles.content}>
                  <Text style={styles.contentName}>
                    Alergias e Intolerâncias
                  </Text>
                  <Text style={styles.contentDetail}></Text>
                </View>

                <View style={styles.content}>
                  <Text style={styles.contentName}>Restrições</Text>
                  <Text style={styles.contentDetail}>
                    {filtered.join(", ")}
                  </Text>
                </View>

                <View style={styles.content}>
                  <Text style={styles.contentName}>Acompanhante</Text>
                  <Text style={styles.contentDetail}>
                    {patient_data.alimentation.acompanhante === true
                      ? "Sim"
                      : "Não"}
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
                    {patient_data.alimentation?.observations}
                  </Text>
                </View>
              </View>
            </View>
          </Surface>
        </View>
      </View>
    </>
  );
};

export default KitchenTag;
