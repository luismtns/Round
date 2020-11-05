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
    navigation.setOptions({
      title: userInfo,
    });
    // Table Data Observable
    const unsubscribe = firebaseDataService.getProfessionalSnapshot(
      30,
      "general",
      {
        next: (querySnapshot: any) => {
          var arrayQuery = querySnapshot.docs.map((doc: any) => doc.data());
          setDataTable(arrayQuery);
        },
        error: (err: any) => console.log(err),
      }
    );
    return unsubscribe;
  }, [isVisible]);

  return (
    <>
      <div style={{ position: "fixed", bottom: "1em", right: "1em" }}>
        <FAB
          style={styles.fab}
          small
          label="Adicionar"
          icon="plus"
          onPress={goToAddNewProfessional}
        />
      </div>
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
