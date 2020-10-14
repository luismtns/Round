import React, { InputHTMLAttributes } from "react";
import { Input } from "react-native-elements";
import theme from "../../styles/theme.style";
import styles from "./styles";
import { TextInput } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  keyboardType?: string;
  secureTextEntry?: boolean;
  onChangeText?: Function;
  returnKeyType?: string;
  label: string;
  right?: any;
  icon?: any;
  showHide?: any;
}

const MainInput: React.FC<InputProps> = ({ icon, showHide, ...rest }: any) => {
  return (
    <TextInput
      style={styles.input}
      theme={{ colors: { primary: "#376C71", background: "#F8F8F8" } }}
      right={<TextInput.Icon name={icon} onPress={showHide} />}
      {...rest}
    ></TextInput>
  );
};

export default MainInput;
