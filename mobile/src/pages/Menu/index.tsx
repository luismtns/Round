import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import Card from "../../components/Card";
import theme from "../../styles/theme.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Modal, Portal, Provider, TextInput } from "react-native-paper";
import { colors } from "react-native-elements";

function Menu() {
  const { navigate } = useNavigation();
  const [visible, setVisible] = React.useState(false);

  const img = require("../../assets/key.png");
  const showModal = () => setVisible(true);

  const hideModal = () => setVisible(false);

  function handleGoToPatients() {
    setVisible(false);
    navigate("Clinic");
  }

  function handleGoToAdmin() {
    navigate("AdminMenu");
  }

  function handleLogout() {
    navigate("Login");
  }

  function goToConfigPage() {
    navigate("Configuration");
  }

  function goToKitchen() {
    navigate("Kitchen");
  }

  return (
    <>
      <Provider>
        <Portal>
          <Modal
            visible={visible}
            contentContainerStyle={{
              width: 400,
              height: 400,
              backgroundColor: "white",
              alignItems: "center",
              alignSelf: "center",
              padding: 20,
            }}
            onDismiss={hideModal}
          >
            <View style={styles.modalContainer}>
              <View>
                <Image style={styles.modalIcon} source={img}></Image>
                <Text>Insira abaixo o código de autenticação</Text>
                <TextInput
                  textContentType={"password"}
                  secureTextEntry={true}
                  style={styles.modalActions}
                ></TextInput>
              </View>

              <View>
                <Button
                  mode="contained"
                  theme={{ colors: { primary: "#376C71" } }}
                  style={[styles.modalActions, { marginVertical: 12 }]}
                  onPress={handleGoToPatients}
                >
                  Acessar
                </Button>
                <Button
                  mode="outlined"
                  style={styles.modalActions}
                  theme={{ colors: { primary: "#376C71" } }}
                  onPress={hideModal}
                >
                  Voltar
                </Button>
              </View>
            </View>
          </Modal>
        </Portal>

        <SafeAreaView style={{ paddingLeft: 20, paddingTop: 20 }}>
          <Text style={styles.title}>Área de acesso</Text>
          <Text style={styles.subTitle}>
            Escolha abaixo sua respectiva área.
          </Text>
        </SafeAreaView>

        <View style={styles.container}>
          <View style={styles.card}>
            <Card
              title="Clínica"
              icon={
                <FontAwesome5
                  style={styles.icon}
                  name="notes-medical"
                  size={30}
                  color={theme.TERTIARY_COLOR}
                />
              }
              style={[
                {
                  backgroundColor: "#1C383D",
                },
              ]}
              text={styles.boxText}
              onPress={showModal}
            />
          </View>
          <View style={styles.card}>
            <Card
              title="Cozinha"
              icon={
                <MaterialCommunityIcons
                  style={styles.icon}
                  name="pot-mix"
                  size={30}
                  color={theme.TERTIARY_COLOR}
                />
              }
              style={[
                {
                  backgroundColor: "#1C383D",
                },
              ]}
              text={styles.boxText}
              onPress={goToKitchen}
            />
          </View>
          <View style={styles.card}>
            <Card
              title="Administração"
              icon={
                <Entypo
                  style={styles.icon}
                  name="tools"
                  size={30}
                  color={theme.TERTIARY_COLOR}
                />
              }
              style={[
                {
                  backgroundColor: "#1C383D",
                },
              ]}
              text={styles.boxText}
              onPress={handleGoToAdmin}
            />
          </View>
          <View style={styles.card}>
            <Card
              title="Configurações"
              icon={
                <MaterialCommunityIcons
                  style={styles.icon}
                  name="settings"
                  size={30}
                  color={theme.TERTIARY_COLOR}
                />
              }
              style={[
                {
                  backgroundColor: "#1C383D",
                },
              ]}
              text={styles.boxText}
              onPress={goToConfigPage}
            />
          </View>
        </View>
      </Provider>
    </>
  );
}

export default Menu;
