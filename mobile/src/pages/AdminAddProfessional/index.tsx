import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import styles from "./styles";

import {
  Avatar,
  Chip,
  IconButton,
  Portal,
  Surface,
  TextInput,
} from "react-native-paper";
import { FAB } from "react-native-paper";
import { ImagePicker } from "expo";
import { firebaseDataService } from "./../../services/data/index";
import { useNavigation } from "@react-navigation/native";
import { ProfessionalProfile } from "./../../interfaces/professional.interface";
import DialogPrimary from "../../components/DialogPrimary";

const AdminAddProfessional: React.FC = ({ navigation, route }: any) => {
  const { navigate } = useNavigation();
  const userInfo = route.params.data;
  const userEdit: ProfessionalProfile = route.params?.edit;

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

  const [kitchen, setKitchen] = useState(false);
  const [adm, setAdm] = useState(false);
  const [clinic, setClinic] = useState(false);

  const [documents, setDocuments] = useState<string[]>([]);

  const [Dialog, setDialog] = useState({
    open: false,
    title: "",
    label: "",
    onHide: () => {
      hideDialog;
    },
  });
  const hideDialog = () => {
    setDialog({
      open: false,
      title: "",
      label: "",
      onHide: () => {},
    });
  };

  useEffect(() => {
    navigation.setOptions({
      title: userInfo,
    });
    if (userEdit) {
      setName(userEdit.personal.name);
      setBirthday(userEdit.personal.birthday);
      setMarital(userEdit.personal.marital);
      setNationality(userEdit.personal.nationality);
      setCitizenship(userEdit.personal.citizenship);
      setGender(userEdit.personal.gender);
      setCpf(userEdit.personal.cpf);
      setRg(userEdit.personal.rg);
      setSpecialty(userEdit.professional.specialty);
      setCrm(userEdit.professional.crm ? userEdit.professional.crm : "");
      setCode(userEdit.professional.code);
      setAdmission(userEdit.professional.admission);
      setManager(userEdit.professional.manager);
      setKitchen(userEdit.auth.kitchen);
      setAdm(userEdit.auth.adm);
      setClinic(userEdit.auth.clinic);
    }
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
    };

    const professionalData = {
      specialty,
      crm,
      code,
      admission,
      manager,
    };

    const auth = {
      kitchen,
      adm,
      clinic,
    };

    const ProfessionalDataModel = {
      professional: professionalData,
      personal: personalData,
      timestamp: firebaseDataService.timestamp,
      auth,
      professional_type: "medic",
    };

    firebaseDataService
      .addProfessional(ProfessionalDataModel)
      .then((value) => {
        setDialog({
          open: true,
          title: "Sucesso!",
          label: "Dados do médico salvos com sucesso!",
          onHide: () => {
            navigate("AdminCoordMedic");
          },
        });
      })
      .catch((err) => {
        setDialog({
          open: true,
          title: "Erro!",
          label:
            "Tivemos problemas ao tentar salvar os dados, verifique se preencheu tudo corretamente.",
          onHide: () => {
            hideDialog();
          },
        });
      });
  }

  // Edit User

  async function handleSelectDocuments() {
    if (Platform.OS !== "web") {
      const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

      if (status !== "granted") {
        alert("Precisamos de acesso às suas fotos...");
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
        <DialogPrimary
          show={Dialog.open}
          title={Dialog.title}
          paragraph={Dialog.label}
          button={"Ok"}
          hide={Dialog.onHide}
        />
        <View style={styles.imgCompany}>
          <IconButton
            icon="pencil"
            color="#EDEDED"
            size={20}
            style={{ zIndex: 50 }}
            onPress={() => {}}
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
              <div style={{ position: "fixed", bottom: "1em", right: "1em" }}>
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
              </div>
            </Portal>
            <View style={[styles.container]}>
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
                  disabled={userEdit ? true : false}
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

        <Surface style={{ marginTop: 40 }}>
          <Text style={styles.title}>Cargos</Text>
          <View style={{ padding: 8, flex: 1, marginLeft: 8, marginBottom: 8 }}>
            <View style={styles.container}>
              <View>
                <Chip
                  selected={clinic}
                  style={{ marginRight: 12 }}
                  onPress={() => setClinic(!clinic)}
                >
                  Clínica
                </Chip>
              </View>
              <View>
                <Chip
                  selected={kitchen}
                  style={{ marginRight: 12 }}
                  onPress={() => setKitchen(!kitchen)}
                >
                  Cozinha
                </Chip>
              </View>
              <View>
                <Chip
                  selected={adm}
                  style={{ marginRight: 12 }}
                  onPress={() => setAdm(!adm)}
                >
                  Administração
                </Chip>
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
      </View>
    </>
  );
};

export default AdminAddProfessional;
