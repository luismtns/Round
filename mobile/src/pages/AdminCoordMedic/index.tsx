import React, { useState } from "react";
import styles from "./styles";

import { View, Text } from "react-native";
import {
  Button,
  DataTable,
  Menu,
  Provider,
  Searchbar,
} from "react-native-paper";
import { DATA } from "../../services/data/index";
import { useNavigation } from "@react-navigation/native";

const AdminCoordMedic: React.FC = () => {
  const { navigate } = useNavigation();
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  function goToPatient(id: any) {
    // navigate(`Patient`, { patient: id });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Equipe médica</Text>

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
  );
};

export default AdminCoordMedic;
