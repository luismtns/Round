import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  Platform,
  Alert,
} from "react-native";
import styles from "./styles";
import { Button, IconButton, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import AuthService from "../../services/auth/index";

const imgBackground = require("../../assets/background.png");

function ForgotPasswordPage() {
  const { navigate } = useNavigation();
  const [email, setEmail] = useState("");

  async function handleForgotPassword() {
    await AuthService.sendPasswordResetEmail(email)
      .then((res: any) => {
        if (Platform.OS === "web") {
          alert(
            "Acesse seu e-mail e siga as instruções para recuperação de senha."
          );
        } else {
          Alert.alert(
            "Recuperação de senha",
            "Acesse seu e-mail e siga as instruções para recuperação de senha.",
            [{ text: "OK", onPress: () => {} }]
          );
        }

        navigate("Login");
      })
      .catch((err: any) => {
        if (Platform.OS === "web") {
          alert(
            "Ocorreu um problema ao tentar enviar o e-mail de recuperação, confira seu e-mail e tente novamente mais tarde."
          );
        } else {
          Alert.alert(
            "Recuperação de senha",
            "Ocorreu um problema ao tentar enviar o e-mail de recuperação, confira seu e-mail e tente novamente mais tarde.",
            [{ text: "OK", onPress: () => {} }]
          );
        }
      })
      .finally(() => {});
  }

  function goToLoginPage() {
    navigate("Login");
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

      <View style={styles.containerForgotPassword}>
        <View style={styles.containerInput}>
          <View style={{ flexDirection: "row" }}>
            <IconButton
              icon="arrow-left"
              size={20}
              color="#fff"
              onPress={goToLoginPage}
            />
            <Text style={styles.title}>Esqueci minha senha</Text>
          </View>

          <Text style={styles.subTitle}>
            Podemos ajudá-lo a redefinir sua senha e suas informações de
            segurança. Insira seu e-mail que entraremos em contato.
          </Text>

          <TextInput
            label="E-mail"
            value={email}
            mode="outlined"
            keyboardType="email-address"
            onChangeText={setEmail}
            style={{ marginBottom: 16 }}
          />

          <Button
            mode="contained"
            contentStyle={{ height: 50 }}
            onPress={() => handleForgotPassword()}
          >
            RESETAR
          </Button>
        </View>
      </View>
    </View>
  );
}

export default ForgotPasswordPage;
