import React, { InputHTMLAttributes } from "react";
import { Input } from "react-native-elements";
import theme from "../../styles/theme.style";
import styles from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  keyboardType?: string;
  secureTextEntry?: boolean;
  onChangeText?: Function;
  returnKeyType?: string;
  label: string;
  rightIcon?: any;
}

const MainInput: React.FC<InputProps> = ({ ...rest }: any) => {
  return (
    <Input
      labelStyle={{
        color: theme.TERTIARY_TEXT_COLOR,
        fontWeight: "500",
        fontFamily: "Assistant_400Regular",
        fontSize: theme.FONT_SIZE_SMALL,
      }}
      containerStyle={{ paddingHorizontal: 0 }}
      style={styles.input}
      {...rest}
    />
  );
};

export default MainInput;
