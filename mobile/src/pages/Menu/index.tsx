import React from "react";
import { View, Text } from "react-native";
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

function Menu() {
  const { navigate } = useNavigation();

  function handleGoToPatients() {
    navigate("Clinic");
  }

  function handleLogout() {
    navigate("Login");
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
            onPress={handleGoToPatients}
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
            onPress={handleLogout}
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
            onPress={handleLogout}
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
    </>
  );
}

export default Menu;
