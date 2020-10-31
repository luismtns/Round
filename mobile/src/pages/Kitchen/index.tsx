import React, { useState } from "react";
import styles from "./styles";
import { View, Text, Picker } from "react-native";
import { DATA, PROFESSIONAL } from "../../services/data/index";
import { useEffect } from "react";
import SearchSection from "../../components/SearchSection";
import TableKitchen from "../../components/TableKitchen";

const Kitchen: React.FC = ({ navigation, route }: any) => {
  const [selectedValue, setSelectedValue] = useState();
  var userInfo = route.params.data;

  useEffect(() => {
    navigation.setOptions({
      title: userInfo,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ width: "100%", height: 40, marginBottom: 12 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Geral" value="all" />
        <Picker.Item label="Lorem" value="lorem" />
        <Picker.Item label="Lorem" value="lorem" />
        <Picker.Item label="Lorem" value="lorem" />
        <Picker.Item label="Lorem" value="lorem" />
        <Picker.Item label="Lorem" value="lorem" />
        <Picker.Item label="Lorem" value="lorem" />
      </Picker>
      <Text style={styles.title}>Pacientes</Text>

      <SearchSection />

      <TableKitchen data={DATA} />
    </View>
  );
};

export default Kitchen;
