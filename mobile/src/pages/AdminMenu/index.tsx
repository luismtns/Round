import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Surface } from "react-native-paper";
import styles from "./styles";

const AdminMenu: React.FC = ({ navigation, route }: any) => {
  const { navigate } = useNavigation();
  var userInfo = route.params.data;

  useEffect(() => {
    navigation.setOptions({
      title: userInfo,
    });
  }, []);

  function goToAddPatient() {
    navigate("AdminAddPatient", { data: userInfo });
  }

  function goToPatients() {
    navigate("AdminCoordPatients", { data: userInfo });
  }

  function goToAdminCoordMedic() {
    navigate("AdminCoordMedic", { data: userInfo });
  }

  function goToAdminDischargePatients() {
    navigate("AdminDischargePatients", { data: userInfo });
  }

  function goToAdminCoordGeneral() {
    navigate("AdminCoordGeneral", { data: userInfo });
  }

  function goToFoodWaste() {
    navigate("AdminFoodWaste", { data: userInfo });
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
              <Text style={styles.title}>Novo paciente</Text>
              <Text style={styles.subtitle}>
                Cadastro da entrada de paciente
              </Text>
            </Surface>
          </TouchableOpacity>
        </View>
        <View style={{ width: "49%" }}>
          <TouchableOpacity
            style={{ flex: 1, width: "100%" }}
            onPress={goToPatients}
          >
            <Surface style={styles.optionsContainer}>
              <Text style={styles.title}>Pacientes</Text>
              <Text style={styles.subtitle}>
                Consulta e alteração de informações.
              </Text>
            </Surface>
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.optionsRow, { marginVertical: 20 }]}>
        <View style={{ width: "49%" }}>
          <TouchableOpacity
            onPress={goToAdminDischargePatients}
            style={{ flex: 1, width: "100%" }}
          >
            <Surface style={styles.optionsContainer}>
              <Text style={styles.title}>Alta paciente</Text>
              <Text style={styles.subtitle}>
                Fechamento da ficha e revisão de dados.
              </Text>
            </Surface>
          </TouchableOpacity>
        </View>
        <View style={{ width: "49%" }}>
          <TouchableOpacity
            style={{ flex: 1, width: "100%" }}
            onPress={goToAdminCoordMedic}
          >
            <Surface style={styles.optionsContainer}>
              <Text style={styles.title}>Coordenação Médica</Text>
              <Text style={styles.subtitle}>
                Lista dos médicos cadastrados no hospital.
              </Text>
            </Surface>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.optionsRow}>
        <View style={{ width: "49%" }}>
          <TouchableOpacity
            style={{ flex: 1, width: "100%" }}
            onPress={goToAdminCoordGeneral}
          >
            <Surface style={styles.optionsContainer}>
              <Text style={styles.title}>Coordenação Geral</Text>
              <Text style={styles.subtitle}>
                Lista dos funcionários gerais cadastrados no hospital.
              </Text>
            </Surface>
          </TouchableOpacity>
        </View>
        <View style={{ width: "49%" }}>
          <TouchableOpacity
            style={{ flex: 1, width: "100%" }}
            onPress={goToFoodWaste}
          >
            <Surface style={styles.optionsContainer}>
              <Text style={styles.title}>Desperdício de Alimentos</Text>
              <Text style={styles.subtitle}>
                Informações e dados detalhados sobre o desperdício gerado
              </Text>
            </Surface>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AdminMenu;
