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
import DialogPrimary from "../../components/DialogPrimary";
import { hide } from "expo/build/launch/SplashScreen";

const imgBackground = require("../../assets/background.png");

function ForgotPasswordPage() {
  const { navigate } = useNavigation();
  const [email, setEmail] = useState("");
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

  async function handleForgotPassword() {
    await AuthService.sendPasswordResetEmail(email)
      .then(() => {
        const genericMessage =
          "Acesse seu e-mail e siga as instruções para recuperação de senha.";

        setDialog({
          open: true,
          title: "Recuperação de senha",
          label: genericMessage,
          onHide: () => {
            navigate("Login");
          },
        });
      })
      .catch((err: any) => {
        const genericMessage =
          "Ocorreu um problema ao tentar enviar o e-mail de recuperação, confira seu e-mail e tente novamente.";
        setDialog({
          open: true,
          title: "Erro!",
          label: genericMessage,
          onHide: () => {
            hideDialog();
          },
        });
      })
      .finally(() => {});
  }

  function goToLoginPage() {
    navigate("Login");
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
