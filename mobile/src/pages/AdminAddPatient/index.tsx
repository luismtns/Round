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
import { FAB } from "react-native-paper";
import { firebaseDataService } from "./../../services/data/index";
import { useNavigation } from "@react-navigation/native";
import DialogPrimary from "../../components/DialogPrimary";

const AdminAddPatient: React.FC = ({ route, navigation }: any) => {
  const { navigate } = useNavigation();
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

  const [observation, setObservation] = useState("");

  const [Dialog, setDialog] = useState({
    open: false,
    title: "",
    label: "",
    onHide: () => {},
  });

  const userInfo = route.params.data;
  const patient = route.params.patient;
  const editPatient = route.params.editPatient;

  useEffect(() => {
    if (editPatient) {
      setName(patient.personal.name);
      setBirthday(patient.personal.birthday);
      setMarital(patient.personal.marital);
      setNationality(patient.personal.nationality);
      setCitizenship(patient.personal.citizenship);
      setGender(patient.personal.gender);
      setCpf(patient.personal.cpf);
      setRg(patient.personal.rg);
      setHospitalization(patient.hospitalization.hospitalization);
      setEntryDate(patient.hospitalization.entryDate);
      setRh(patient.hospitalization.rh);
      setHealthInsurance(patient.hospitalization.healthInsurance);
      setSector(patient.hospitalization.sector);
      setFloor(patient.hospitalization.floor);
      setRoom(patient.hospitalization.room);
      setBed(patient.hospitalization.bed);
      setObservation(patient.personal.observation);
    }

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
    };

    const PatientData = {
      hospitalization: hospitalizationData,
      personal: personalData,
      timestamp: firebaseDataService.timestamp,
    };
    firebaseDataService
      .setPatient(PatientData, editPatient ? patient.id : null)
      .then((value) => {
        setDialog({
          open: true,
          title: "Sucesso!",
          label: `Dados do paciente foram ${
            editPatient ? "editados" : "salvos"
          } com sucesso`,
          onHide: () => {
            if (editPatient) {
              navigate("AdminCoordPatients");
            } else {
              navigate("AdminMenu");
            }
          },
        });
      })
      .catch((err) => {
        setDialog({
          open: true,
          title: "Erro!",
          label: `Falha ao ${editPatient ? "editadar" : "salvar"} os dados.`,
          onHide: () => {
            setDialog({
              open: false,
              title: "",
              label: "",
              onHide: () => {},
            });
            if (editPatient) {
              navigate("AdminCoordPatients");
            } else {
              navigate("AdminMenu");
            }
          },
        });
      })
      .finally(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
  }

  return (
    <>
      <DialogPrimary
        show={Dialog.open}
        title={Dialog.title}
        paragraph={Dialog.label}
        button={"Ok"}
        hide={Dialog.onHide}
      />
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

        <Surface style={{ marginVertical: 40 }}>
          <Text style={styles.title}>Documentos</Text>
          <View style={{ padding: 8, flex: 1 }}>
            <View style={styles.container}>
              <View style={[styles.item, { width: "100%" }]}>
                <List.Item
                  title="Foto 3x4"
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
