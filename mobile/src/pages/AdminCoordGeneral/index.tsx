import React, { useEffect, useState } from "react";
import styles from "./styles";

import { View, Text } from "react-native";
import { FAB } from "react-native-paper";
import { DATA, firebaseDataService } from "../../services/data/index";
import { useNavigation } from "@react-navigation/native";
import Table from "../../components/Table";
import SearchSection from "../../components/SearchSection";
import TableProfessionals from "./../../components/TableProfessionals/index";
import { ProfessionalProfile } from "./../../interfaces/professional.interface";

const AdminCoordGeneral: React.FC = ({ route, navigation }: any) => {
  const { navigate } = useNavigation();
  const userInfo = route.params.data;
  const [dataTable, setDataTable] = useState();

  function goToAddNewProfessional() {
    navigate("AdminAddProfessionalGeneral", { data: userInfo });
  }

  useEffect(() => {
    firebaseDataService.getProfessionalList2(30).then((data: any) => {
      console.log("🔥 getProfessionalList2", data);
      setDataTable(data);
    });
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
        {dataTable && <TableProfessionals TableData={dataTable} />}
      </View>
    </>
  );
};

export default AdminCoordGeneral;
