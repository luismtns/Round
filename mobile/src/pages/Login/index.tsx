import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  Alert,
  Platform,
} from "react-native";
import styles from "./styles";
import { Dialog, Paragraph, Portal, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";

import { text } from "../../styles/theme.style";
import AuthService from "./../../services/auth/index";

const imgBackground = require("../../assets/background.png");

function Login() {
  const { navigate } = useNavigation();
  const [showPassword, setShowPassword] = useState(true);
  const [icon, setIcon] = useState("eye");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [visible, setVisible] = useState(false);

  function handleLogin(email: any, password: any) {
    AuthService.signInWithEmailAndPassword(email, password)
      .then((res) => {})
      .catch((err) => {
        if (Platform.OS === "web") {
          alert("Falha ao efetuar o login.");
        } else {
          Alert.alert("Login", "Falha ao efetuar o login.", [
            { text: "OK", onPress: () => {} },
          ]);
        }
      });
  }

  function goToForgotPassword() {
    navigate("forgotPassword");
  }

  function goToContact() {
    alert("Tela contato");
  }

  function handlePassword() {
    setIcon(icon === "eye" ? "eye-off" : "eye");
    setShowPassword(!showPassword);
  }

  return (
    <View style={styles.container}>
      <Portal>
        <Dialog
          style={{ maxWidth: 300, marginLeft: "auto", marginRight: "auto" }}
          visible={visible}
          onDismiss={() => setVisible(false)}
        >
          <Dialog.Title>Erro</Dialog.Title>
          <Dialog.Content>
            <Paragraph>
              O e-mail informado "{email}" é inválido ou não existe.
            </Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setVisible(false)}>OK</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <ImageBackground style={styles.containerLogo} source={imgBackground}>
        <View>
          <Image
            style={styles.logo}
            source={require("../../assets/logo.png")}
          />
        </View>
      </ImageBackground>

      <View style={styles.containerInput}>
        <View style={styles.inputBox}>
          <Text style={styles.title}>Bem vindo!</Text>

          <TextInput
            value={email}
            label="E-mail"
            mode="outlined"
            keyboardType="email-address"
            returnKeyType="go"
            style={{ marginBottom: 12 }}
            onChangeText={setEmail}
          ></TextInput>

          <TextInput
            value={password}
            mode="outlined"
            secureTextEntry={showPassword}
            label="Senha"
            right={<TextInput.Icon name={icon} onPress={handlePassword} />}
            onChangeText={setPassword}
          ></TextInput>

          <Text
            onPress={goToForgotPassword}
            style={[styles.forgotPass, text.text5]}
          >
            recuperar acesso
          </Text>

          <Button
            mode="contained"
            contentStyle={{ height: 50 }}
            onPress={() => handleLogin(email, password)}
          >
            ENTRAR
          </Button>

          <Text style={[styles.contactBorder, text.text5]}>
            <span>ou</span>
          </Text>

          <Text onPress={goToContact} style={[styles.contact, text.text5]}>
            Não tem uma conta?{"\n"}
            <Text style={styles.contactAccount}>Entrar em contato</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Login;
