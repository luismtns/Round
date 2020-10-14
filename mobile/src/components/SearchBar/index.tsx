import React, { useState } from "react";
import { View } from "react-native";
import { SearchBar } from "react-native-elements";
import styles from "./styles";
import { Searchbar } from "react-native-paper";

const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query: any) => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default MyComponent;
