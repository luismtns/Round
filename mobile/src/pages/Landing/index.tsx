import React, { useState } from "react";
import { View, Text, Image, KeyboardAvoidingView } from "react-native";
import styles from "./styles";
import MainInput from "../../components/MainInput";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import theme from "../../styles/theme.style";
function Landing() {
  const { navigate } = useNavigation();
  const [showPassword, setShowPassword] = useState(true);
  const [icon, setIcon] = useState("eye");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(email: any, password: any) {
    // email e pass OK
    navigate("Home");
  }

  function goToForgotPassword() {
    navigate("forgotPassword");
  }

  function goToContact() {
    alert("Tela contato");
  }

  function handlePassword() {
    setIcon(icon === "eye" ? "eye-with-line" : "eye");
    setShowPassword(!showPassword);
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
      </View>
      <KeyboardAvoidingView
        style={styles.containerInput}
        behavior="padding"
        enabled
      >
        <View style={styles.inputBox}>
          <Text style={styles.title}>Bem vindo!</Text>
          <MainInput
            value={email}
            label="E-mail"
            keyboardType="email-address"
            returnKeyType="go"
            onChangeText={(value: any) => {
              setEmail(value);
            }}
          />
          <MainInput
            value={password}
            secureTextEntry={showPassword}
            label="Senha"
            rightIcon={
              <Entypo
                name={icon}
                size={24}
                color={theme.SECONDARY_TEXT_COLOR}
                onPress={handlePassword}
              ></Entypo>
            }
            onChangeText={(value: any) => {
              setPassword(value);
            }}
          />
          <TouchableOpacity activeOpacity={0.6} onPress={goToForgotPassword}>
            <Text style={styles.forgotPass}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
          <Button
            type="filled"
            size="large"
            title="LOGIN"
            onPress={() => handleLogin(email, password)}
          />

          <Text onPress={goToContact} style={styles.contact}>
            Não tem uma conta?{"\n"}
            <Text style={styles.contactAccount}>Entrar em contato</Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

export default Landing;
