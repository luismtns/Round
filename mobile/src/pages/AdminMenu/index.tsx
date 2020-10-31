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
    navigate("AdminAddPatient");
  }

  function goToAdminCoordMedic() {
    navigate("AdminCoordMedic");
  }

  function goToAdminCoordGeneral() {
    navigate("AdminCoordGeneral");
  }

  function goToFoodWaste() {
    navigate("AdminFoodWaste");
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                convallis.
              </Text>
            </Surface>
          </TouchableOpacity>
        </View>
        <View style={{ width: "49%" }}>
          <TouchableOpacity style={{ flex: 1, width: "100%" }}>
            <Surface style={styles.optionsContainer}>
              <Text style={styles.title}>Triagem</Text>
              <Text style={styles.subtitle}>
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
              <Text style={styles.title}>Alta paciente</Text>
              <Text style={styles.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                convallis.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                convallis.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                convallis.
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
