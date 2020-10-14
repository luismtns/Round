import React, { useState, useContext } from "react";
import { View, Text, Modal, Alert } from "react-native";
import styles from "./styles";
import MainInput from "../../components/MainInput";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import { UserContext } from "../../providers/UserProvider";
import Card from "../../components/Card";
import MainModal from "../../components/Modal";
import SearchBarComponent from "../../components/SearchBar";
import theme from "../../styles/theme.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";

function Menu() {
  const { navigate } = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  function handleGoToPatients() {
    // Alert.alert("Código de acesso", "Insira o código de acesso", [
    //   { text: "Cancel", style: "cancel" },
    //   { text: "Ok", style: "default" },
    // ]);
    navigate("Clinic");
  }

  function logout() {
    navigate("Login");
  }

  function showModal() {
    setIsVisible(true);
  }

  function hideModal() {
    setIsVisible(false);
  }

  function goToConfigPage() {
    navigate("Configuration");
  }

  return (
    <>
      <SafeAreaView style={{ paddingLeft: 20, paddingTop: 20 }}>
        <Text style={styles.title}>Área de acesso</Text>
        <Text style={styles.subTitle}>Escolha abaixo sua respectiva área.</Text>
      </SafeAreaView>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "flex-start",
          padding: 20,
        }}
      >
        <View
          style={{
            width: "50%",
          }}
        >
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
                marginRight: 10,
              },
            ]}
            text={styles.boxText}
            onPress={handleGoToPatients}
          />
        </View>
        <View
          style={{
            width: "50%",
          }}
        >
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
                marginLeft: 10,
                backgroundColor: "#1C383D",
              },
            ]}
            text={styles.boxText}
            onPress={logout}
          />
        </View>
        <View
          style={{
            width: "50%",
          }}
        >
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
                marginRight: 10,
              },
            ]}
            text={styles.boxText}
            onPress={logout}
          />
        </View>
        <View
          style={{
            width: "50%",
          }}
        >
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
                marginLeft: 10,
                backgroundColor: "#1C383D",
              },
            ]}
            text={styles.boxText}
            onPress={goToConfigPage}
          />
        </View>
      </View>
    </>
  );
}

export default Menu;
