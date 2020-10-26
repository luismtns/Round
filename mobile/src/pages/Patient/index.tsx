import React, { useState, useEffect } from "react";
import { View, Text, Picker } from "react-native";
import styles from "./styles";

import { PROFESSIONAL } from "../../services/data/index";
import {
  Avatar,
  Surface,
  TextInput,
  Switch,
  Button,
  Chip,
  Menu,
} from "react-native-paper";
import { colors, text, theme } from "../../styles/theme.style";

export interface PatientProps {
  patient: {
    id: string;
    name: string;
    ra: string;
    andar: string;
    quarto: string;
  };
}

const Patient = (props: any) => {
  const { patient }: PatientProps = props.route.params;
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const closeMenu = () => setVisible(false);
  const openMenu = () => setVisible(true);
  const [selectedValue, setSelectedValue] = useState("java");

  const [generalDiet, setGeneralDiet] = useState(false);
  const [vegetarianDiet, setVegetarianDiet] = useState(false);
  const [veganDiet, setVeganDiet] = useState(false);
  const [kosherDiet, setKosherDiet] = useState(false);
  const [halalDiet, setHalalDiet] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  useEffect(() => {
    props.navigation.setOptions({
      title: PROFESSIONAL,
    });
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Surface style={styles.containerPatientData}>
          <Avatar.Image
            source={{
              uri:
                "https://avatars1.githubusercontent.com/u/47098158?s=460&u=7eb39142d3453f3a29050ff072a80f721c61ae29&v=4",
            }}
          ></Avatar.Image>
          <View style={{ paddingLeft: 20 }}>
            <Text>Nome: {patient.name}</Text>
            <Text>RA: {patient.ra}</Text>
          </View>
        </Surface>
        <View style={styles.containerDataAndHistory}>
          <Surface style={styles.containerChangePatientData}>
            <Text style={[styles.title, text.text3, colors.gray]}>
              Alimentação
            </Text>
            <Text style={styles.subtitles}>Dieta</Text>
            <Picker
              selectedValue={selectedValue}
              style={{ width: "50%" }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <Picker.Item label="Geral" value="all" />
              <Picker.Item label="Lorem" value="lorem" />
              <Picker.Item label="Lorem" value="lorem" />
              <Picker.Item label="Lorem" value="lorem" />
              <Picker.Item label="Lorem" value="lorem" />
              <Picker.Item label="Lorem" value="lorem" />
              <Picker.Item label="Lorem" value="lorem" />
            </Picker>

            <View style={styles.restrictions}>
              <Text style={styles.subtitles}>Restrições alimentares</Text>
              <View style={{ flexDirection: "row" }}>
                <Chip
                  selected={generalDiet}
                  style={{ marginRight: 12 }}
                  onPress={() => setGeneralDiet(!generalDiet)}
                >
                  Comum
                </Chip>
                <Chip
                  selected={vegetarianDiet}
                  style={{ marginRight: 12 }}
                  onPress={() => setVegetarianDiet(!vegetarianDiet)}
                >
                  Vegetariana
                </Chip>
                <Chip
                  selected={veganDiet}
                  style={{ marginRight: 12 }}
                  onPress={() => setVeganDiet(!veganDiet)}
                >
                  Vegana
                </Chip>
                <Chip
                  selected={kosherDiet}
                  style={{ marginRight: 12 }}
                  onPress={() => setKosherDiet(!kosherDiet)}
                >
                  Kosher
                </Chip>
                <Chip
                  selected={halalDiet}
                  style={{ marginRight: 12 }}
                  onPress={() => setHalalDiet(!halalDiet)}
                >
                  Halal
                </Chip>
              </View>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Text style={styles.subtitles}>Acompanhante</Text>
              <Switch
                style={{ marginLeft: 12 }}
                value={isSwitchOn}
                onValueChange={onToggleSwitch}
              />
            </View>

            <Text style={styles.subtitles}>Observações</Text>
            <TextInput multiline numberOfLines={3}></TextInput>

            <Button style={{ marginTop: 12 }} mode="contained">
              Salvar alterações
            </Button>
          </Surface>
          <Surface style={styles.containerPatientHistory}>
            <Text style={[styles.title, text.text3, colors.gray]}>
              Histórico
            </Text>
            <Text>Andar: {patient.andar}</Text>
          </Surface>
        </View>
      </View>
    </>
  );
};

export default Patient;
