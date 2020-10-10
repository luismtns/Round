import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./styles";

interface ButtonProps {
  title?: any;
  type?: string;
  value?: string;
  placeholder?: string;
  onPress: any;
  style?: any;
  icon?: any;
  text?: any;
}

const Card: React.FC<ButtonProps> = ({
  title,
  icon,
  text,
  style,
  ...rest
}: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[style, styles.touch]}
        {...rest}
        activeOpacity={0.7}
      >
        <View>{icon}</View>
        <Text style={[text, styles.label]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
