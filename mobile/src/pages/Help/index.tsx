import React from "react";
import { View } from "react-native";
import { List } from "react-native-paper";
import styles from "./styles";
// import { Container } from './styles';

const Help: React.FC = () => {
  return (
    <>
      <List.Item
        title="Problemas"
        description="Lorem ipsum dolor sit amet"
        style={{ width: "100%" }}
        left={(props) => <List.Icon color="#B00020" icon="" />}
      />
      <List.Item
        title="Dúvidas"
        description="Lorem ipsum dolor sit amet"
        style={{ width: "100%" }}
        left={(props) => <List.Icon color="#B00020" icon="" />}
      />
      <List.Item
        title="Sugestões"
        description="Lorem ipsum dolor sit amet"
        style={{ width: "100%" }}
        left={(props) => <List.Icon color="#B00020" icon="" />}
      />
    </>
  );
};

export default Help;
