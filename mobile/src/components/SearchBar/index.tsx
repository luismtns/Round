import React, { useState } from "react";
import { View } from "react-native";
import { SearchBar } from "react-native-elements";
import styles from "./styles";

const SearchBarComponent: React.FC<any> = ({}) => {
  const [search, setSearch] = useState("");
  return (
    <View>
      <SearchBar
        round
        searchIcon={{ size: 24 }}
        onChangeText={(text) => setSearch(text)}
        placeholder="Pesquisar..."
        value={search}
        lightTheme={true}
        showCancel={true}
        showLoading={false}
        cancelButtonTitle="Cancelar"
      />
    </View>
  );
};

export default SearchBarComponent;
