import React, { useEffect, useState } from "react";
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
import { firebaseDataService } from "./../../services/data/index";

const ProfileForm = ({ uuid, alimentation }: any) => {
  alimentation = alimentation.alimentation ? alimentation.alimentation : {};
  const [selectedValue, setSelectedValue] = useState(
    alimentation.diet ? alimentation.diet : ""
  );
  const [generalDiet, setGeneralDiet] = useState(
    alimentation.restrictions ? alimentation.restrictions.geral : false
  );
  const [vegetarianDiet, setVegetarianDiet] = useState(
    alimentation.restrictions ? alimentation.restrictions.vegetariano : false
  );
  const [veganDiet, setVeganDiet] = useState(
    alimentation.restrictions ? alimentation.restrictions.vegan : false
  );
  const [kosherDiet, setKosherDiet] = useState(
    alimentation.restrictions ? alimentation.restrictions.kosher : false
  );
  const [halalDiet, setHalalDiet] = useState(
    alimentation.restrictions ? alimentation.restrictions.halal : false
  );

  const [isSwitchOn, setIsSwitchOn] = useState(
    alimentation.acompanhante ? alimentation.acompanhante : false
  );
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const [observations, setObservations] = useState(
    alimentation.observations ? alimentation.observations : ""
  );

  function savePatientForm() {
    const Restrictions = {
      geral: generalDiet,
      vegetariano: vegetarianDiet,
      vegan: veganDiet,
      kosher: kosherDiet,
      halal: halalDiet,
    };

    const alimentationData = {
      diet: selectedValue,
      restrictions: Restrictions,
      acompanhante: isSwitchOn,
      observations,
    };

    // data OK
    firebaseDataService
      .updatePatientAlimentation(uuid, alimentationData)
      .then((value) => {
        alert("Dados Salvos");
      })
      .catch((err) => {
        alert("Falha ao salvar dados");
        console.log(err);
      });
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
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Geral" value="Geral" />
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
