import React, { useState } from "react";
import { Picker, View } from "react-native";
import {
  Avatar,
  Button,
  Chip,
  IconButton,
  Surface,
  Switch,
  Text,
  TextInput,
} from "react-native-paper";
import { colors, text } from "../../styles/theme.style";
import styles from "./styles";

const ProfileForm = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  const [generalDiet, setGeneralDiet] = useState(false);
  const [vegetarianDiet, setVegetarianDiet] = useState(false);
  const [veganDiet, setVeganDiet] = useState(false);
  const [kosherDiet, setKosherDiet] = useState(false);
  const [halalDiet, setHalalDiet] = useState(false);

  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const [observations, setObservations] = useState("");

  function savePatientForm() {
    const diet = {
      geral: generalDiet,
      vegetariano: vegetarianDiet,
      vegan: veganDiet,
      kosher: kosherDiet,
      halal: halalDiet,
    };

    const data = {
      diet: selectedValue,
      restrictions: diet,
      acompanhante: isSwitchOn,
      observations,
    };

    // data OK
    console.log(data);
  }

  return (
    <Surface style={styles.containerChangePatientData}>
      <Text
        style={[styles.title, { fontSize: text.text3, color: colors.gray }]}
      >
        Alimentação
      </Text>
      <View style={styles.inputBlock}>
        <Text style={styles.subtitles}>Dieta</Text>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, borderRadius: 3.5 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Geral" value="all" />
          <Picker.Item label="Lorem" value="lorem" />
          <Picker.Item label="Lorem" value="lorem" />
          <Picker.Item label="Lorem" value="lorem" />
          <Picker.Item label="Lorem" value="lorem" />
          <Picker.Item label="Lorem" value="lorem" />
          <Picker.Item label="Lorem" value="lorem" />
        </Picker>
      </View>

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

      <View style={[styles.inputBlock, { flexDirection: "row" }]}>
        <Text style={styles.subtitles}>Acompanhante</Text>
        <Switch
          style={{ marginLeft: 12 }}
          value={isSwitchOn}
          onValueChange={onToggleSwitch}
        />
      </View>

      <View style={styles.inputBlock}>
        <Text style={styles.subtitles}>Observações</Text>
        <TextInput
          placeholder="Observações sobre o paciente..."
          value={observations}
          onChangeText={setObservations}
          multiline
          mode="outlined"
          numberOfLines={3}
        ></TextInput>
      </View>

      <Button mode="contained" onPress={() => savePatientForm()}>
        Salvar alterações
      </Button>
    </Surface>
  );
};

export default ProfileForm;
