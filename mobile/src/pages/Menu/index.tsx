import React, { useState } from "react";
import { View, Text, Image, ImageBackground } from "react-native";

import styles from "./styles";
import { colors, text } from "../../styles/theme.style";

import { useNavigation } from "@react-navigation/native";
import {
  Button,
  IconButton,
  Modal,
  Portal,
  Provider,
  TextInput,
} from "react-native-paper";

function Menu() {
  const { navigate } = useNavigation();
  const [visible, setVisible] = useState(false);

  const img = require("../../assets/key.png");
  const bkImg = require("../../assets/illustration.png");
  const logo = require("../../assets/logo.png");

  const hideModal = () => setVisible(false);

  function goToClinic() {
    setVisible(false);
    navigate("Clinic");
  }

  function goToAdmin() {
    navigate("AdminMenu");
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
                  onPress={() => {}}
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

        <View
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            flexDirection: "column",
            justifyContent: "space-evenly",
            // backgroundColor: "#ffffff",
          }}
        >
          <ImageBackground
            source={bkImg}
            resizeMode="contain"
            style={{
              width: "100%",
              height: "100%",
              padding: 20,
              paddingVertical: 40,
              overflow: "hidden",
            }}
            imageStyle={{
              resizeMode: "cover",
              height: 200,
              top: undefined,
            }}
          >
            <Image
              source={logo}
              style={{
                width: 250,
                height: 100,
                marginHorizontal: "auto",
                marginVertical: 10,
              }}
              resizeMode="contain"
            />
            <View
              style={{
                position: "absolute",
                width: "100vw",
                height: "100vh",
                top: 0,
                left: 0,
                justifyContent: "center",
              }}
            >
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <View style={{ alignItems: "center", marginHorizontal: 10 }}>
                  <IconButton
                    icon="hospital-box"
                    size={60}
                    onPress={goToClinic}
                    color={colors.p_light}
                    style={{
                      borderColor: colors.p_light,
                      borderWidth: 4,
                      width: 160,
                      height: 160,
                      borderRadius: 100,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: text.text4,
                      fontFamily: "Assistant_600SemiBold",
                      color: colors.black,
                      marginTop: 10,
                    }}
                  >
                    Clínica
                  </Text>
                </View>
                <View style={{ alignItems: "center", marginHorizontal: 10 }}>
                  <IconButton
                    icon="silverware-fork-knife"
                    size={60}
                    onPress={goToKitchen}
                    color={colors.p_light}
                    style={{
                      borderColor: colors.p_light,
                      borderWidth: 4,
                      width: 160,
                      height: 160,
                      borderRadius: 100,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: text.text4,
                      fontFamily: "Assistant_600SemiBold",
                      color: colors.black,
                      marginTop: 10,
                    }}
                  >
                    Cozinha
                  </Text>
                </View>
                <View style={{ alignItems: "center", marginHorizontal: 10 }}>
                  <IconButton
                    icon="wrench"
                    size={60}
                    onPress={goToAdmin}
                    color={colors.p_light}
                    style={{
                      borderColor: colors.p_light,
                      borderWidth: 4,
                      width: 160,
                      height: 160,
                      borderRadius: 100,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: text.text4,
                      fontFamily: "Assistant_600SemiBold",
                      color: colors.black,
                      marginTop: 10,
                    }}
                  >
                    Administração
                  </Text>
                </View>
                <View style={{ alignItems: "center", marginHorizontal: 10 }}>
                  <IconButton
                    icon="settings"
                    size={60}
                    onPress={goToConfigPage}
                    color={colors.p_light}
                    style={{
                      borderColor: colors.p_light,
                      borderWidth: 4,
                      width: 160,
                      height: 160,
                      borderRadius: 100,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: text.text4,
                      fontFamily: "Assistant_600SemiBold",
                      color: colors.black,
                      marginTop: 10,
                    }}
                  >
                    Configurações
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </Provider>
    </>
  );
}

export default Menu;
