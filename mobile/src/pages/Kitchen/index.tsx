import React, { useState } from "react";
import styles from "./styles";

import { View, Text, Picker } from "react-native";
import {
  Button,
  DataTable,
  IconButton,
  Menu,
  Provider,
  Searchbar,
} from "react-native-paper";
import { DATA, PROFESSIONAL } from "../../services/data/index";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Icon } from "react-native-paper/lib/typescript/src/components/Avatar/Avatar";

const Kitchen: React.FC = (props: any) => {
  const { navigate } = useNavigation();
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  function goToKitchenTag(id: any) {
    navigate(`KitchenTag`);
  }

  useEffect(() => {
    props.navigation.setOptions({
      title: PROFESSIONAL,
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
          <DataTable.Title>Etiquetas</DataTable.Title>
        </DataTable.Header>

        {DATA.map((item) => {
          return (
            <DataTable.Row
              key={item.id}
              onPress={() => {
                goToKitchenTag(item);
              }}
            >
              <DataTable.Cell>{item.name}</DataTable.Cell>
              <DataTable.Cell>{item.ra}</DataTable.Cell>
              <DataTable.Cell>{item.nascimento}</DataTable.Cell>
              <DataTable.Cell>{item.quarto}</DataTable.Cell>
              <DataTable.Cell>
                <IconButton icon="ticket-account"></IconButton>
              </DataTable.Cell>
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

export default Kitchen;
