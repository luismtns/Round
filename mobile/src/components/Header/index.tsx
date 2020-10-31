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
        <Avatar.Text
          size={40}
          labelStyle={styles.role}
          label={props.children.personal?.name.slice(0, 2).toLocaleUpperCase()}
        />
        <View style={styles.titles}>
          <Text style={styles.name}>{props.children.personal?.name}</Text>
          <Text style={styles.role}>
            {props.children.professional?.specialty}
          </Text>
        </View>
      </View>
    </>
  );
};

export default Header;
