import React, { useEffect } from "react";
import styles from "./styles";

import { View, Text } from "react-native";
import { FAB } from "react-native-paper";
import { DATA } from "../../services/data/index";
import { useNavigation } from "@react-navigation/native";
import Table from "../../components/Table";
import SearchSection from "../../components/SearchSection";

const AdminCoordGeneral: React.FC = ({ route, navigation }: any) => {
  const { navigate } = useNavigation();
  const userInfo = route.params.data;

  function goToAddNewProfessional() {
    navigate("AdminAddProfessionalGeneral", { data: userInfo });
  }

  useEffect(() => {
    navigation.setOptions({
      title: userInfo,
    });
  }, []);

  return (
    <>
      <FAB
        style={styles.fab}
        small
        label="Adicionar"
        icon="plus"
        onPress={goToAddNewProfessional}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Equipe geral</Text>
        <SearchSection />
        <Table data={DATA} professional />
      </View>
    </>
  );
};

export default AdminCoordGeneral;
