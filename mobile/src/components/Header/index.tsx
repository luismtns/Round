import React from "react";
import { View, Text, Image } from "react-native";
import { Avatar } from "react-native-paper";
// import { Container } from './styles';
import styles from "./styles";

interface ProfessionalProps {
  name?: "string";
  ra?: "string";
}

const Header: React.FC<ProfessionalProps> = (props: any) => {
  return (
    <>
      <View style={styles.container}>
        <Avatar.Image
          size={32}
          source={{
            uri: props.children.img,
          }}
        />
        <View style={styles.titles}>
          <Text style={styles.name}>{props.children.name}</Text>
          <Text style={styles.ra}>{props.children.ra}</Text>
        </View>
      </View>
    </>
  );
};

export default Header;
