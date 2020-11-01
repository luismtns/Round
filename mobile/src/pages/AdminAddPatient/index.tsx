import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

import {
  Avatar,
  IconButton,
  List,
  Portal,
  Surface,
  TextInput,
} from "react-native-paper";
// import { Container } from './styles';
import { FAB } from "react-native-paper";
import { firebaseDataService } from "./../../services/data/index";

interface Intern {
  type: string;
  date: string;
  rh: string;
}

const AdminAddPatient: React.FC = ({ route, navigation }: any) => {
  const [selectIndex, setSelectedIndex] = useState(0);
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [marital, setMarital] = useState("");
  const [nationality, setNationality] = useState("");
  const [citizenship, setCitizenship] = useState("");
  const [gender, setGender] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");

  const [hospitalization, setHospitalization] = useState("");
  const [entryDate, setEntryDate] = useState("");
  const [rh, setRh] = useState("");
  const [healthInsurance, setHealthInsurance] = useState("");
  const [sector, setSector] = useState("");
  const [floor, setFloor] = useState("");
  const [room, setRoom] = useState("");
  const [bed, setBed] = useState("");
  const [companion, setCompanion] = useState("");

  const [observation, setObservation] = useState("");

  const userInfo = route.params.data;

  useEffect(() => {
    navigation.setOptions({
      title: userInfo,
    });
  }, []);

  function saveData() {
    const personalData = {
      name,
      birthday,
      marital,
      nationality,
      citizenship,
      gender,
      cpf,
      rg,
      observation,
    };

    const hospitalizationData = {
      hospitalization,
      entryDate,
      rh,
      healthInsurance,
      sector,
      floor,
      room,
      bed,
      companion,
    };

    const PatientData = {
      hospitalization: hospitalizationData,
      personal: personalData,
      timestamp: firebaseDataService.timestamp,
    };
    firebaseDataService
      .addPatient(PatientData)
      .then((value) => {
        alert("Dados Salvos");

        console.log(value);
      })
      .catch((err) => {
        alert("Falha ao salvar dados");
        console.log(err);
      });
  }

  return (
    <>
      <View style={styles.containerInputs}>
        <View style={styles.imgCompany}>
          <IconButton
            icon="pencil"
            color="#EDEDED"
            size={20}
            style={{ zIndex: 50 }}
            onPress={() => console.log("Pressed")}
          />
          <Avatar.Icon
            size={120}
            icon="account"
            style={{
              borderRadius: 4,
              position: "absolute",
              height: "100%",
              width: 100,
            }}
          />
        </View>
        <Surface>
          <Text style={styles.title}>Dados pessoais</Text>
          <View style={{ padding: 8, flex: 1 }}>
            <Portal>
              <FAB
                style={{
                  position: "absolute",
                  margin: 16,
                  right: 0,
                  bottom: 0,
                  zIndex: 1000,
                }}
                small
                label="CONCLUÍDO"
                icon="plus"
                onPress={() => saveData()}
              />
            </Portal>
            <View style={styles.container}>
              <View style={[styles.item, { width: "75%" }]}>
                <TextInput
                  mode="outlined"
                  value={name}
                  onChangeText={(text) => setName(text)}
                  label="Nome"
                />
              </View>
              <View style={[styles.item, { width: "25%" }]}>
                <TextInput
                  mode="outlined"
                  value={birthday}
                  onChangeText={setBirthday}
                  label="Data de nascimento"
                />
              </View>

              <View style={styles.item}>
                <TextInput
                  mode="outlined"
                  value={marital}
                  onChangeText={setMarital}
                  label="Estado civil"
                />
              </View>
              <View style={styles.item}>
                <TextInput
                  mode="outlined"
                  value={citizenship}
                  onChangeText={setCitizenship}
                  label="Nacionalidade"
                />
              </View>
              <View style={styles.item}>
                <TextInput
                  mode="outlined"
                  value={nationality}
                  onChangeText={setNationality}
                  label="Naturalidade"
                />
              </View>
              <View style={styles.item}>
                <TextInput
                  mode="outlined"
                  value={gender}
                  onChangeText={setGender}
                  label="Sexo"
                />
              </View>

              <View style={styles.item}>
                <TextInput
                  mode="outlined"
                  value={cpf}
                  onChangeText={setCpf}
                  label="CPF"
                />
              </View>
              <View style={styles.item}>
                <TextInput
                  mode="outlined"
                  value={rg}
                  onChangeText={setRg}
                  label="RG"
                />
              </View>
            </View>
          </View>
        </Surface>

        <Surface style={{ marginTop: 40 }}>
          <Text style={styles.title}>Internações</Text>
          <View style={{ padding: 8, flex: 1 }}>
            <View style={styles.container}>
              <View style={styles.item}>
                <TextInput
                  mode="outlined"
                  value={hospitalization}
                  onChangeText={(e) => {
                    setHospitalization(e);
                  }}
                  label="Tipo da internação"
                />
              </View>
              <View style={styles.item}>
                <TextInput
                  mode="outlined"
                  value={entryDate}
                  onChangeText={setEntryDate}
                  label="Data de Entrada"
                />
              </View>
              <View style={styles.item}>
                <TextInput
                  mode="outlined"
                  value={rh}
                  onChangeText={setRh}
                  label="RH"
                />
              </View>
              <View style={styles.item}>
                <TextInput
                  mode="outlined"
                  value={healthInsurance}
                  onChangeText={setHealthInsurance}
                  label="Convênio"
                />
              </View>

              <View style={styles.item}>
                <TextInput
                  mode="outlined"
                  value={sector}
                  onChangeText={setSector}
                  label="Setor"
                />
              </View>
              <View style={[styles.item, { width: "12.5%" }]}>
                <TextInput
                  mode="outlined"
                  value={floor}
                  onChangeText={setFloor}
                  label="Andar"
                />
              </View>
              <View style={[styles.item, { width: "12.5%" }]}>
                <TextInput
                  mode="outlined"
                  value={room}
                  onChangeText={setRoom}
                  label="Quarto"
                />
              </View>
              <View style={styles.item}>
                <TextInput
                  mode="outlined"
                  value={bed}
                  onChangeText={setBed}
                  label="Leito"
                />
              </View>
              <View style={styles.item}>
                <TextInput
                  mode="outlined"
                  value={companion}
                  onChangeText={setCompanion}
                  label="Acompanhamento"
                />
              </View>
            </View>
          </View>
        </Surface>

        <Surface style={{ marginTop: 40 }}>
          <Text style={styles.title}>Observações</Text>
          <View style={{ padding: 8, flex: 1 }}>
            <View style={styles.container}>
              <View style={[styles.item, { width: "100%" }]}>
                <TextInput
                  mode="outlined"
                  value={observation}
                  multiline={true}
                  numberOfLines={5}
                  onChangeText={setObservation}
                  label="Observações"
                />
              </View>
            </View>
          </View>
        </Surface>

        <Surface style={{ marginTop: 40 }}>
          <Text style={styles.title}>Documentos</Text>
          <View style={{ padding: 8, flex: 1 }}>
            <View style={styles.container}>
              <View style={[styles.item, { width: "100%" }]}>
                <List.Item
                  title="First Item"
                  right={(props) => (
                    <>
                      <IconButton
                        icon="download"
                        color="black"
                        size={20}
                        onPress={() => console.log("Pressed")}
                      />
                      <IconButton
                        icon="delete"
                        color="red"
                        size={20}
                        onPress={() => console.log("Pressed")}
                      />
                    </>
                  )}
                />
              </View>
            </View>
          </View>
        </Surface>
      </View>
    </>
  );
};

export default AdminAddPatient;
