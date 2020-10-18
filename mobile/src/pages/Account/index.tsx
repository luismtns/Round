import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { List } from "react-native-paper";
// import { Container } from './styles';

const Account: React.FC = () => {
  function goToLogin() {}
  function changePassword() {}
  return (
    <>
      <View style={styles.containerLogout}>
        <View>
          <List.Item
            title="Instituição"
            description="iasjfdiduasf"
            style={{ width: "100%" }}
            left={(props) => <List.Icon icon="" />}
          />
        </View>
        <View>
          <List.Item
            title="Alterar senha"
            onPress={changePassword}
            style={{ width: "100%" }}
            left={(props) => <List.Icon icon="" />}
          />
          <List.Item
            title="Deletar conta"
            titleStyle={styles.textLogout}
            onPress={goToLogin}
            style={{ width: "100%" }}
            left={(props) => <List.Icon color="#B00020" icon="logout" />}
          />
        </View>
      </View>
    </>
  );
};

export default Account;
