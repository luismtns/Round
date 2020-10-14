import React, { useState } from "react";
import { View, Text, Alert, Image } from "react-native";
import styles from "./styles";
import { IconButton } from "react-native-paper";
import MainInput from "../../components/MainInput";
import ButtonPrimary from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

function ForgotPasswordPage() {
  const { navigate } = useNavigation();
  const [email, setEmail] = useState("");

  async function handleForgotPassword() {
    // email OK
    Alert.alert(
      "Pronto!",
      `Suas informações foram enviadas para o e-mail "${email}".`,
      [{ text: "OK" }]
    );
    navigate("Login");
  }

  function goToLoginPage() {
    navigate("Login");
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
      </View>
      <View style={styles.containerForgotPassword}>
        <View style={styles.containerInput}>
          <IconButton icon="arrow-left" size={20} onPress={goToLoginPage} />
          <Text style={styles.title}>Esqueci minha senha</Text>
          <Text style={styles.subTitle}>
            Podemos ajudá-lo a redefinir sua senha e suas informações de
            segurança. Insira seu e-mail que entraremos em contato.
          </Text>
          <MainInput
            label="E-mail"
            keyboardType="email-address"
            onChangeText={(email: string) => {
              setEmail(email);
            }}
          />
          <ButtonPrimary
            type="filled"
            size="large"
            title="RESGATAR"
            onPress={handleForgotPassword}
          />
        </View>
      </View>
    </View>
  );
}

export default ForgotPasswordPage;
