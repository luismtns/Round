import React, { useState } from "react";
import { View } from "react-native";
import { Button, Menu, Provider, Searchbar } from "react-native-paper";
import styles from "./styles";

const SearchSection = (props: any) => {
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  function handleSearch() {
    props.searchProp(search);
  }

  return (
    <View style={styles.filter}>
      <Searchbar
        placeholder="Pesquisar"
        onChangeText={setSearch}
        value={search}
        style={[
          styles.searchBar,
          { backgroundColor: "#EEEEEE", shadowColor: "transparent" },
        ]}
        inputStyle={{ color: "#AEAEAE" }}
        onIconPress={handleSearch}
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
              <Button onPress={openMenu} color="#AEAEAE" icon="filter-variant">
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
      <Button
        mode="outlined"
        style={styles.searchButton}
        onPress={handleSearch}
      >
        Pesquisar
      </Button>
    </View>
  );
};

export default SearchSection;
