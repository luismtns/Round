import React, { useState } from "react";
import { View, Text, Alert, Image, ImageBackground } from "react-native";
import styles from "./styles";
import { Button, IconButton, TextInput } from "react-native-paper";
import MainInput from "../../components/MainInput";
import ButtonPrimary from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AuthService from "../../services/auth/index";

const imgBackground = require("../../assets/background.png");
function ForgotPasswordPage() {
  const { navigate } = useNavigation();
  const [email, setEmail] = useState("");

  async function handleForgotPassword() {
    // email OK
    AuthService.sendPasswordResetEmail(email);

    // Alert.alert(
    //   "Pronto!",
    //   `Suas informações foram enviadas para o e-mail "${email}".`,
    //   [{ text: "OK" }]
    // );
    navigate("Login");
  }

  function goToLoginPage() {
    navigate("Login");
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={[styles.containerLogo, { justifyContent: "center" }]}
        source={imgBackground}
      >
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
            mode="outlined"
            keyboardType="email-address"
            onChangeText={setEmail}
            style={{ marginBottom: 16 }}
          />

          <Button
            mode="contained"
            contentStyle={{ height: 50 }}
            onPress={handleForgotPassword}
          >
            RESETAR
          </Button>
        </View>
      </View>
    </View>
  );
}

export default ForgotPasswordPage;
