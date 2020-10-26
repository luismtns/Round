import React, { useState } from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import styles from "./styles";
import { TextInput } from "react-native-paper";
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

  function handleLogin(email: any, password: any) {
    // email e pass OK
    AuthService.signInWithEmailAndPassword(email, password).catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        console.log("That email address is already in use!");
      }

      if (error.code === "auth/invalid-email") {
        console.log("That email address is invalid!");
        Alert.alert(
          "Erro.",
          `O e-mail informado ("${email}") é inválido ou não existe.`,
          [{ text: "OK" }]
        );
      }

      console.error(error);
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
