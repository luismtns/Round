import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import styles from "./styles";
import MainInput from "../../components/MainInput";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

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
    navigate("Landing");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esqueci minha senha</Text>
      <Text style={styles.subTitle}>
        Podemos ajudá-lo a redefinir sua senha e suas informações de segurança.
        Insira seu e-mail que entraremos em contato.
      </Text>
      <MainInput
        label="E-mail"
        keyboardType="email-address"
        onChangeText={(email: string) => {
          setEmail(email);
        }}
      />
      <Button
        type="filled"
        size="large"
        title="RESGATAR"
        onPress={handleForgotPassword}
      />
    </View>
  );
}

export default ForgotPasswordPage;
