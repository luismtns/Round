import React, { useState, useContext, useEffect } from "react";
import { View, Text, Picker, FlatList } from "react-native";
import { DataTable } from "react-native-paper";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

import SearchBarComponent from "../../components/SearchBar";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DATA, PROFESSIONAL } from "../../services/data/index";

const Clinic = (props: any) => {
  const [selectedValue, setSelectedValue] = useState("alfabética");
  const [patients, setPatients]: any = useState([{}]);
  const { navigate } = useNavigation();

  function goToPatient(id: any) {
    navigate(`Patient`, { patient: id });
  }

  useEffect(() => {
    props.navigation.setOptions({
      title: PROFESSIONAL,
    });
  }, []);

  // const Item = ({ name, ra, andar, quarto, id }: any) => (
  //   <View>
  //     <TouchableOpacity onPress={id}>
  //       <Text>
  //         {name} | {ra}
  //       </Text>
  //       <Text>
  //         {andar} | {quarto}
  //       </Text>
  //     </TouchableOpacity>
  //   </View>
  // );

  // const renderItem = ({ item }: any) => (
  //   <Item
  //     name={item.name}
  //     ra={item.ra}
  //     andar={item.andar}
  //     quarto={item.quarto}
  //     id={() => goToPatient(item)}
  //   />
  // );

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

      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Nome</DataTable.Title>
          <DataTable.Title>RH</DataTable.Title>
          <DataTable.Title>Data de nascimento</DataTable.Title>
          <DataTable.Title>Localização</DataTable.Title>
        </DataTable.Header>

        {DATA.map((item) => {
          return (
            <DataTable.Row
              key={item.id}
              onPress={() => {
                goToPatient(item);
              }}
            >
              <DataTable.Cell>{item.name}</DataTable.Cell>
              <DataTable.Cell>{item.ra}</DataTable.Cell>
              <DataTable.Cell>{item.nascimento}</DataTable.Cell>
              <DataTable.Cell>{item.quarto}</DataTable.Cell>
            </DataTable.Row>
          );
        })}

        <DataTable.Pagination
          page={1}
          numberOfPages={3}
          onPageChange={(page) => {
            console.log(page);
          }}
          label="1-2 of 6"
        />
      </DataTable>
    </>
  );
};

export default Clinic;
