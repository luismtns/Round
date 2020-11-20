import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  Alert,
  Platform,
  Linking,
} from "react-native";
import styles from "./styles";
import { Dialog, Paragraph, Portal, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import * as WebBrowser from "expo-web-browser";

import { text } from "../../styles/theme.style";
import AuthService from "./../../services/auth/index";
import DialogPrimary from "../../components/DialogPrimary";

const imgBackground = require("../../assets/background.png");

function Login() {
  const { navigate } = useNavigation();
  const [showPassword, setShowPassword] = useState(true);
  const [icon, setIcon] = useState("eye");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const [Dialog, setDialog] = useState({
    open: false,
    title: "",
    label: "",
    onHide: () => {
      hideDialog();
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
  function handleLogin(email: any, password: any) {
    setLoader(true);
    AuthService.signInWithEmailAndPassword(email, password)
      .then((res) => {
        setLoader(false);
      })
      .catch((err) => {
        setLoader(false);

        var message = "";
        const genericMessage =
          "Verifique as informações de login e tente novamente.";
        if (err && err.code) {
          if (err.code == "auth/invalid-email") {
            message = "E-mail não encontrado ou não informado.";
          } else if (err.code == "auth/wrong-password") {
            message = "Senha informada incorreta.";
          } else {
            message = genericMessage;
          }
        } else {
          message = genericMessage;
        }

        setDialog({
          open: true,
          title: "Erro!",
          label: message,
          onHide: () => {
            hideDialog();
          },
        });
      });
  }

  function goToForgotPassword() {
    navigate("forgotPassword");
  }

  function goToContact() {
    if (Platform.OS !== "web") {
      WebBrowser.openBrowserAsync("https://projetoround.com/");
    } else {
      Linking.openURL("https://projetoround.com/");
    }
  }

  function handlePassword() {
    setIcon(icon === "eye" ? "eye-off" : "eye");
    setShowPassword(!showPassword);
  }

  return (
    <View style={styles.container}>
      <DialogPrimary
        show={Dialog.open}
        title={Dialog.title}
        paragraph={Dialog.label}
        button={"Ok"}
        hide={Dialog.onHide}
      />
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
            mode="flat"
            keyboardType="email-address"
            returnKeyType="go"
            style={{ marginBottom: 12 }}
            onChangeText={setEmail}
          ></TextInput>

          <TextInput
            value={password}
            mode="flat"
            secureTextEntry={showPassword}
            label="Senha"
            right={<TextInput.Icon name={icon} onPress={handlePassword} />}
            onChangeText={setPassword}
          ></TextInput>

          <Text
            onPress={goToForgotPassword}
            style={[styles.forgotPass, { fontSize: text.text5 }]}
          >
            recuperar acesso
          </Text>

          <Button
            mode="contained"
            contentStyle={{ height: 50 }}
            loading={loader}
            onPress={() => handleLogin(email, password)}
          >
            ENTRAR
          </Button>

          <Text style={[styles.contactBorder, { fontSize: text.text5 }]}>
            <span>ou</span>
          </Text>

          <Text
            onPress={goToContact}
            style={[styles.contact, { fontSize: text.text5 }]}
          >
            Não tem uma conta?{"\n"}
            <Text style={styles.contactAccount}>Entrar em contato</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Login;
