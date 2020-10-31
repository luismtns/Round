import React, { useState, useEffect } from "react";
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
import { firebaseDataService } from "../../services/data";
import DialogPrimary from "./../../components/DialogPrimary/index";

function Menu() {
  const { navigate } = useNavigation();
  const [visible, setVisible] = useState(false);
  const [userPass, setUserPass] = useState("");
  const img = require("../../assets/key.png");
  const bkImg = require("../../assets/illustration.png");
  const logo = require("../../assets/logo.png");

  const hideModal = () => setVisible(false);

  // Dialong Consts
  const [open, setOpen] = useState(false);
  const [Dialog, setDialog] = useState({
    title: "",
    label: "",
  });

  function goToClinic() {
    setVisible(true);
    // navigate("Clinic");
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

  function authUser() {
    if (!userPass) {
      setDialog({
        title: "Campo vazio!",
        label: "Informe seu CPF para realizar o acesso",
      });
      return setOpen(true);
    }
    firebaseDataService.getAuthMedic(userPass).then(async (data: any) => {
      if (data && data.clinic) {
        hideModal();
        navigate("Clinic");
      } else {
        hideModal();
        setDialog({
          title: "Erro!",
          label: "CPF informado não encontrado ou não autorizado.",
        });
        setOpen(true);
      }
    });
  }

  return (
    <>
      <DialogPrimary
        show={open}
        title={Dialog.title}
        paragraph={Dialog.label}
        button="OK"
        hide={() => {
          setOpen(false);
        }}
      />

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
              <Text>Insira abaixo seu CPF para ser identificado.</Text>
              <TextInput
                value={userPass}
                placeholder="CPF"
                mode="outlined"
                onChangeText={setUserPass}
              ></TextInput>
            </View>

            <View>
              <Button
                mode="contained"
                style={[styles.modalActions, { marginVertical: 12 }]}
                onPress={authUser}
              >
                Acessar
              </Button>
              <Button
                mode="outlined"
                style={styles.modalActions}
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
    </>
  );
}

export default Menu;
