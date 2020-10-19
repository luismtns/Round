import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { RectButton, TouchableOpacity } from "react-native-gesture-handler";
import { Surface } from "react-native-paper";
import styles from "./styles";
// import { Container } from './styles';

const AdminMenu: React.FC = () => {
  const { navigate } = useNavigation();

  function goToAddPatient() {
    navigate("AdminAddPatient");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.optionsRow}>
        <View style={{ width: "49%" }}>
          <TouchableOpacity
            style={{ flex: 1, width: "100%" }}
            onPress={goToAddPatient}
          >
            <Surface style={styles.optionsContainer}>
              <Text>Novo paciente</Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                convallis.
              </Text>
            </Surface>
          </TouchableOpacity>
        </View>
        <View style={{ width: "49%" }}>
          <TouchableOpacity style={{ flex: 1, width: "100%" }}>
            <Surface style={styles.optionsContainer}>
              <Text>Triagem</Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                convallis.
              </Text>
            </Surface>
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.optionsRow, { marginVertical: 20 }]}>
        <View style={{ width: "49%" }}>
          <TouchableOpacity style={{ flex: 1, width: "100%" }}>
            <Surface style={styles.optionsContainer}>
              <Text>Alta paciente</Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                convallis.
              </Text>
            </Surface>
          </TouchableOpacity>
        </View>
        <View style={{ width: "49%" }}>
          <TouchableOpacity style={{ flex: 1, width: "100%" }}>
            <Surface style={styles.optionsContainer}>
              <Text>Coordenação Médica</Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                convallis.
              </Text>
            </Surface>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.optionsRow}>
        <View style={{ width: "49%" }}>
          <TouchableOpacity style={{ flex: 1, width: "100%" }}>
            <Surface style={styles.optionsContainer}>
              <Text>Coordenação Geral</Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                convallis.
              </Text>
            </Surface>
          </TouchableOpacity>
        </View>
        <View style={{ width: "49%" }}>
          <TouchableOpacity style={{ flex: 1, width: "100%" }}>
            <Surface style={styles.optionsContainer}>
              <Text>Desperdício de Alimentos</Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                convallis.
              </Text>
            </Surface>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AdminMenu;
