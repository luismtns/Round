import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
// import { Container } from './styles';
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { List } from "react-native-paper";
import { color } from "react-native-reanimated";
import AuthService from "./../../services/auth/index";

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

  function Logout() {
    AuthService.logout();
  }

  return (
    <>
      <List.Item
        title="Conta"
        description="Dados cadastrais, alterar senha e deletar conta"
        onPress={goToAccount}
        left={(props) => <List.Icon color="#376C71" icon="account-multiple" />}
      />

      <List.Item
        title="Sobre"
        description="Projeto e iniciativa"
        onPress={goToAbout}
        left={(props) => <List.Icon color="#376C71" icon="account-multiple" />}
      />

      <List.Item
        title="Suporte"
        description="Reportar problema"
        onPress={goToHelp}
        left={(props) => <List.Icon color="#376C71" icon="help-circle" />}
      />

      <View style={styles.containerLogout}>
        <List.Item
          title="Sair"
          titleStyle={styles.textLogout}
          onPress={goToLogin}
          style={{ width: "100%" }}
          left={(props) => <List.Icon color="#B00020" icon="logout" />}
        />
      </View>
    </>
  );
};

export default Configuration;
