import React, { useState, useContext, useEffect } from "react";
import { View, Text, Picker, FlatList } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

import SearchBarComponent from "../../components/SearchBar";
import { TouchableOpacity } from "react-native-gesture-handler";

function PatientList() {
  const [selectedValue, setSelectedValue] = useState("alfabética");
  const [patients, setPatients]: any = useState([{}]);
  const { navigate } = useNavigation();

  function handleGoToPatient(id: string) {
    navigate(`Pat`, { patient: id });
    console.log("a");
  }
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      name: "First Item",
      ra: "2303203",
      andar: "2",
      quarto: "25",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      name: "Second Item",
      ra: "2303203",
      andar: "2",
      quarto: "25",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      name: "Third Item",
      ra: "2303203",
      andar: "2",
      quarto: "25",
    },
  ];

  useEffect(() => {
    setPatients(DATA);
  }, []);

  const Item = ({ name, ra, andar, quarto, id }: any) => (
    <View>
      <TouchableOpacity onPress={id}>
        <Text>
          {name} | {ra}
        </Text>
        <Text>
          {andar} | {quarto}
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }: any) => (
    <Item
      name={item.name}
      ra={item.ra}
      andar={item.andar}
      quarto={item.quarto}
      id={() => handleGoToPatient(item)}
    />
  );

  return (
    <>
      <SearchBarComponent />
      <View style={styles.filter}>
        <Text>Pacientes</Text>
        <Picker
          mode="dropdown"
          selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Alfabética" value="alfabética" />
          <Picker.Item label="Quartos" value="quartos" />
        </Picker>
      </View>

      <FlatList
        data={patients}
        renderItem={renderItem}
        keyExtractor={(patient) => {
          return patient.id;
        }}
      />
    </>
  );
}

export default PatientList;
