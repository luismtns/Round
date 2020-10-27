import React from "react";
import { View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { List } from "react-native-paper";

import AuthService from "./../../services/auth/index";

import styles from "./styles";

const Configuration: React.FC = () => {
  const { navigate } = useNavigation();
  const img = require("../../assets/logo-minimized.png");

  function goToAccountPage() {
    navigate("Account");
  }

  function goToAboutPage() {
    navigate("About");
  }

  function goToHelpPage() {
    navigate("Help");
  }

  function logoutUser() {
    AuthService.logout();
  }

  return (
    <>
      <View style={{ backgroundColor: "#fff", height: "100%" }}>
        <List.Item
          title="Conta"
          description="Dados cadastrais, alterar senha e deletar conta"
          onPress={goToAccountPage}
          left={() => <List.Icon color="#376C71" icon="account-multiple" />}
        />

        <List.Item
          title="Sobre"
          description="Projeto e iniciativa"
          onPress={goToAboutPage}
          left={() => <List.Icon color="#376C71" icon={img} />}
        />

        <List.Item
          title="Suporte"
          description="Reportar problema"
          onPress={goToHelpPage}
          left={() => <List.Icon color="#376C71" icon="help-circle" />}
        />

        <View style={styles.containerLogout}>
          <List.Item
            title="Sair"
            titleStyle={styles.textLogout}
            onPress={logoutUser}
            style={styles.textLogoutContainer}
            left={() => <List.Icon color="#B00020" icon="logout" />}
          />
        </View>
      </View>
    </>
  );
};

export default Configuration;
