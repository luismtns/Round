import React, { useEffect, useState } from "react";
import styles from "./styles";

import { View, Text } from "react-native";
import { FAB } from "react-native-paper";
import { firebaseDataService } from "../../services/data/index";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import SearchSection from "../../components/SearchSection";
import TableProfessionals from "./../../components/TableProfessionals/index";

const AdminCoordGeneral: React.FC = ({ route, navigation }: any) => {
  const { navigate } = useNavigation();
  const userInfo = route.params.data;
  const [dataTable, setDataTable] = useState();

  const isVisible = useIsFocused();

  function goToAddNewProfessional() {
    navigate("AdminAddProfessionalGeneral", { data: userInfo });
  }

  useEffect(() => {
    firebaseDataService.getProfessionalList2(30).then((data: any) => {
      setDataTable(data);
    });
    navigation.setOptions({
      title: userInfo,
    });
  }, [isVisible]);

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
        {dataTable && (
          <TableProfessionals TableData={dataTable} userInfo={userInfo} />
        )}
      </View>
    </>
  );
};

export default AdminCoordGeneral;
