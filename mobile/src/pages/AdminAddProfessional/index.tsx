import React, { useState } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
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
import { ImagePicker } from "expo";
import { firebaseDataService } from "./../../services/data/index";

interface Intern {
  type: string;
  date: string;
  rh: string;
}

const AdminAddProfessional: React.FC = () => {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [marital, setMarital] = useState("");
  const [nationality, setNationality] = useState("");
  const [citizenship, setCitizenship] = useState("");
  const [gender, setGender] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");

  const [specialty, setSpecialty] = useState("");
  const [crm, setCrm] = useState("");
  const [code, setCode] = useState("");
  const [admission, setAdmission] = useState("");
  const [manager, setManager] = useState("");

  const [documents, setDocuments] = useState<string[]>([]);

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
    };

    const professionalData = {
      specialty,
      crm,
      code,
      admission,
      manager,
    };

    const ProfessionalDataModel = {
      professional: professionalData,
      personal: personalData,
      timestamp: firebaseDataService.timestamp,
    };
    firebaseDataService
      .addProfessional(ProfessionalDataModel)
      .then((value) => {
        alert("Dados Salvos");
      })
      .catch((err) => {
        alert("Falha ao salvar dados");
        console.log(err);
      });
  }

  async function handleSelectDocuments() {
    if (Platform.OS !== "web") {
      const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

      if (status !== "granted") {
        alert("Eita, precisamos de acesso às suas fotos...");
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });

      if (result.cancelled) {
        return;
      }

      const { uri: image } = result;

      setDocuments([...documents, image]);
    }
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
                  value={specialty}
                  onChangeText={(e) => {
                    d;
                    setSpecialty(e);
                  }}
                  label="Especialidade"
                />
              </View>
              <View style={styles.item}>
                <TextInput
                  mode="outlined"
                  value={crm}
                  onChangeText={setCrm}
                  label="CRM"
                />
              </View>
              <View style={styles.item}>
                <TextInput
                  mode="outlined"
                  value={code}
                  onChangeText={setCode}
                  label="Código"
                />
              </View>
              <View style={styles.item}>
                <TextInput
                  mode="outlined"
                  value={admission}
                  onChangeText={setAdmission}
                  label="Data de admissão"
                />
              </View>

              <View style={styles.item}>
                <TextInput
                  mode="outlined"
                  value={manager}
                  onChangeText={setManager}
                  label="Gestor"
                />
              </View>
            </View>
          </View>
        </Surface>

        {Platform.OS !== "web" && (
          <Surface style={{ marginTop: 40 }}>
            <Text style={styles.title}>Documentos</Text>
            <View style={{ padding: 8, flex: 1 }}>
              <View style={styles.container}>
                <View style={[styles.item, { width: "100%" }]}>
                  {documents.map((document: any) => {
                    return <Text key={document.id}>{document.name}</Text>;
                  })}

                  <TouchableOpacity onPress={handleSelectDocuments}>
                    <Text>Adicionar documentos</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Surface>
        )}

        {/* <List.Item
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
                /> */}
      </View>
    </>
  );
};

export default AdminAddProfessional;
