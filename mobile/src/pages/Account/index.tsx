import React, { useState } from "react";
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

const Account: React.FC = () => {
  const [account, setAccount] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  function goToLogin() {}
  function changePassword() {}

  function deleteUserAccount() {}

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
                style={styles.input}
                onChangeText={setEmail}
                mode="outlined"
              ></TextInput>
              <TextInput
                value={email}
                label="E-mail"
                style={styles.input}
                onChangeText={setEmail}
                mode="outlined"
              ></TextInput>
            </View>
            <Button
              mode="outlined"
              style={styles.saveButton}
              onPress={() => {
                console.log("press");
              }}
            >
              Salvar
            </Button>
            <Text style={[styles.titles, { marginTop: 24 }]}>Acesso</Text>
            <Divider />
            <List.Item
              title="Alterar senha"
              onPress={changePassword}
              style={styles.accountBlock}
            />
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
