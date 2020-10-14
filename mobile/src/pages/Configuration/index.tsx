import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
// import { Container } from './styles';
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Configuration: React.FC = () => {
  const { navigate } = useNavigation();

  function goToAccount() {
    navigate("Account");
  }

  function goToAbout() {
    navigate("About");
  }

  function goToHelp() {
    navigate("Help");
  }

  function goToLogin() {
    navigate("Login");
  }

  return (
    <>
      <TouchableOpacity onPress={goToAccount}>
        <Text>Account</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goToAbout}>
        <Text>About</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goToHelp}>
        <Text>Help</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goToLogin}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </>
  );
};

export default Configuration;
