import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Button, DataTable, Menu, Provider } from "react-native-paper";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

import { DATA, PROFESSIONAL } from "../../services/data/index";
import { Searchbar } from "react-native-paper";

const Clinic = (props: any) => {
  const [selectedValue, setSelectedValue] = useState("alfabética");
  const [search, setSearch] = useState("");
  const [patients, setPatients]: any = useState([{}]);
  const { navigate } = useNavigation();
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  const [searchQuery, setSearchQuery] = useState("");

  function goToPatient(id: any) {
    navigate(`Patient`, { patient: id });
  }

  useEffect(() => {
    props.navigation.setOptions({
      title: PROFESSIONAL,
    });
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Pacientes</Text>

        <View style={styles.filter}>
          <Searchbar
            placeholder="Pesquisar"
            onChangeText={setSearch}
            value={search}
            style={styles.searchBar}
          />
          <Provider>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Menu
                visible={visible}
                style={{ top: 50, zIndex: 15 }}
                onDismiss={closeMenu}
                anchor={
                  <Button
                    onPress={openMenu}
                    color="#AEAEAE"
                    icon="filter-variant"
                  >
                    Recentes
                  </Button>
                }
              >
                <View>
                  <Menu.Item onPress={() => {}} title="Item 1" />
                  <Menu.Item onPress={() => {}} title="Item 2" />
                  <Menu.Item onPress={() => {}} title="Item 3" />
                </View>
              </Menu>
            </View>
          </Provider>
          <Button mode="outlined" style={styles.searchButton}>
            Pesquisar
          </Button>
        </View>

        <DataTable style={{ zIndex: -10 }}>
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
      </View>
    </>
  );
};

export default Clinic;
