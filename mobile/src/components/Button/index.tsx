import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TextStyle,
  ViewStyle,
} from "react-native";
import theme from "../../styles/theme.style";

interface ButtonProps {
  title: string;
  type?: string;
  onPress: any;
  icon?: any;
  size?: string;
  bordered?: boolean;
}

interface ContainerProp extends ViewStyle {}

interface StyleProp extends TextStyle {
  color: string;
  fontSize: number;
  textAlign: any;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  bordered = false,
  type = "filled",
  size = "large",
}) => {
  const width = Dimensions.get("window").width;
  const btnBgColor = type === "filled" ? theme.PRIMARY_COLOR : "transparent";
  const btnTextColor =
    type === "filled" ? theme.TERTIARY_TEXT_COLOR : theme.PRIMARY_COLOR;
  const large = "100%";
  const small = width / 2;
  const btnSize = size === "large" ? large : small;

  const containerCommonStyle: ContainerProp = {
    backgroundColor: btnBgColor,
    paddingVertical: 8,
    height: 54,
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 16,
    borderRadius: 5,
    width: btnSize,
    justifyContent: "center",
  };

  const textCommonStyle: StyleProp = {
    color: btnTextColor,
    fontSize: 16,
    textAlign: "center",
    textTransform: "uppercase",
  };

  const border = type === "outline" && {
    borderColor: theme.PRIMARY_COLOR,
    borderWidth: 2,
  };

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={[containerCommonStyle, border]}>
        <Text style={[textCommonStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
