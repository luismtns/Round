import React, { useEffect } from "react";
import { View } from "react-native";
import { PROFESSIONAL } from "../../services/data";
import styles from "./styles";
// import { Container } from './styles';

const KitchenTag: React.FC = (props: any) => {
  useEffect(() => {
    props.navigation.setOptions({
      title: PROFESSIONAL,
    });
  }, []);

  return <h1>a</h1>;
};

export default KitchenTag;
