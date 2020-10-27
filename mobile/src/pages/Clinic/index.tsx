import React, { useEffect } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { DATA, PROFESSIONAL } from "../../services/data/index";
import SearchSection from "../../components/SearchSection";
import Table from "../../components/Table";

const Clinic = ({ navigation }: any) => {
  const data = DATA;

  useEffect(() => {
    navigation.setOptions({
      title: PROFESSIONAL,
    });
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Pacientes</Text>

        <SearchSection />
        <Table data={data} />
      </View>
    </>
  );
};

export default Clinic;
