import React, { useEffect, useState } from "react";
import styles from "./styles";
import { View, Text } from "react-native";
import { FAB } from "react-native-paper";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import Table from "../../components/Table";
import SearchSection from "../../components/SearchSection";
import { firebaseDataService } from "./../../services/data/index";
import TableProfessionals from "./../../components/TableProfessionals/index";

const AdminCoordMedic: React.FC = ({ route, navigation }: any) => {
  const { navigate } = useNavigation();
  const userInfo = route.params.data;
  const [dataTable, setDataTable] = useState();

  const isVisible = useIsFocused();

  function goToPatient(id: any) {
    // navigate(`Patient`, { patient: id });
  }
  useEffect(() => {
    firebaseDataService.getProfessionalList(30).then((data: any) => {
      setDataTable(data);
    });
    navigation.setOptions({
      title: userInfo,
    });
  }, [isVisible]);

  function goToAdminAddProfessional() {
    navigate(`AdminAddProfessional`, { data: userInfo });
  }

  return (
    <>
      <FAB
        style={styles.fab}
        small
        label="Adicionar"
        icon="plus"
        onPress={goToAdminAddProfessional}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Equipe médica</Text>

        <SearchSection />
        {dataTable && (
          <TableProfessionals TableData={dataTable} userInfo={userInfo} />
        )}
      </View>
    </>
  );
};

export default AdminCoordMedic;
