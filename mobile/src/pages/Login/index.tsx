import React, { useState } from "react";
import { View, Text, Image, KeyboardAvoidingView, Alert } from "react-native";
import styles from "./styles";
import MainInput from "../../components/MainInput";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "react-native-paper";

import theme from "../../styles/theme.style";
import AuthService from "./../../services/auth/index";

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
      <View style={styles.containerLogo}>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
      </View>

      <View style={styles.containerInput}>
        <View style={styles.inputBox}>
          <Text style={styles.title}>Bem vindo!</Text>

          <TextInput
            value={email}
            label="E-mail"
            keyboardType="email-address"
            returnKeyType="go"
            style={{ height: 50, marginBottom: 12 }}
            onChangeText={setEmail}
          ></TextInput>

          <TextInput
            value={password}
            secureTextEntry={showPassword}
            label="Senha"
            right={<TextInput.Icon name={icon} onPress={handlePassword} />}
            style={{ height: 50 }}
            onChangeText={setPassword}
          ></TextInput>

          <Text onPress={goToForgotPassword} style={styles.forgotPass}>
            Esqueceu sua senha?
          </Text>

          <Button
            mode="contained"
            contentStyle={{ height: 50 }}
            onPress={() => handleLogin(email, password)}
          >
            LOGIN
          </Button>

          <Text style={styles.contactBorder}>
            <span>ou</span>
          </Text>

          <Text onPress={goToContact} style={styles.contact}>
            Não tem uma conta?{"\n"}
            <Text style={styles.contactAccount}>Entrar em contato</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Login;
