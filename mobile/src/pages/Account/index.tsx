import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import {
  List,
  Avatar,
  Button,
  TextInput,
  Divider,
  Portal,
  Dialog,
  Paragraph,
  IconButton,
} from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import AuthService from "./../../services/auth/index";
import { firebaseDataService } from "./../../services/data/index";

const Account: React.FC = () => {
  const uuid = firebaseDataService.uid;

  const [name, setName] = useState("");
  const [email, setEmail] = useState(firebaseDataService.email);
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");

  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  useEffect(() => {
    firebaseDataService.getUser(uuid).then(async (data: any) => {
      if (data.data()) {
        var _user_data = data.data();
        setName(_user_data.name ? _user_data.name : "");
        setNumber(_user_data.number ? _user_data.number : "");
        setAddress(_user_data.address ? _user_data.address : "");
      }
    });
  }, []);

  function saveData() {
    const data = { name, number, address };

    firebaseDataService
      .updateUser(uuid, data)
      .then((value) => {
        alert("Dados Salvos");
      })
      .catch((err) => {
        alert("Falha ao salvar dados");
      });
  }

  function deleteUserAccount() {
    AuthService.delete()
      ?.then((res) => {})
      .catch((err) => {});
  }

  return (
    <>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Deletar conta</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Deseja mesmo deletar sua conta?</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Voltar</Button>
            <Button onPress={deleteUserAccount}>Deletar</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <View style={styles.containerLogout}>
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
            style={{ borderRadius: 4, position: "absolute" }}
          />
        </View>
        <ScrollView>
          <View style={styles.infoCompany}>
            <Text style={styles.titles}>Dados gerais</Text>
            <Divider />
            <View style={styles.inputBlock}>
              <TextInput
                value={name}
                label="Instituição"
                placeholder="GRAACC"
                style={styles.input}
                onChangeText={setName}
                mode="outlined"
              ></TextInput>
              <TextInput
                value={email}
                label="E-mail"
                placeholder="example@email.com"
                style={styles.input}
                disabled={true}
                onChangeText={setEmail}
                mode="outlined"
              ></TextInput>
            </View>
            <View style={styles.inputBlock}>
              <TextInput
                value={number}
                label="Telefone"
                placeholder="(XX) XXXXX-XXXX"
                style={styles.input}
                onChangeText={setNumber}
                mode="outlined"
              ></TextInput>
              <TextInput
                value={address}
                label="Endereço"
                placeholder="Rua do Sabiá, 21"
                style={styles.input}
                onChangeText={setAddress}
                mode="outlined"
              ></TextInput>
            </View>
            <Button
              mode="outlined"
              style={styles.saveButton}
              onPress={() => saveData()}
            >
              Salvar
            </Button>
            <Text style={[styles.titles, { marginTop: 24 }]}>Acesso</Text>
            <Divider />

            <List.Item
              title="Deletar conta"
              titleStyle={styles.textLogout}
              onPress={showDialog}
              style={styles.accountBlock}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Account;
