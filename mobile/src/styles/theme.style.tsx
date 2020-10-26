import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

export default {
  FONT_SIZE_SMALL: 16,
  FONT_SIZE_MEDIUM: 20,
  FONT_SIZE_LARGE: 32,
  PRIMARY_COLOR: "#376C71",
  TERTIARY_COLOR: "#F1F1ED",
  PRIMARY_TEXT_COLOR: "#3E3E3E",
  SECONDARY_TEXT_COLOR: "#898989",
  TERTIARY_TEXT_COLOR: "#FBFBFB",
  PRIMARY_BACKGROUND: "#f9f9f9",
  SECONDARY_BACKGROUND: "#014146",
  TERTIARY_BACKGROUND: "#f9f9f9",
  BORDER: 10,
  PADDING_MEDIUM: 16,
};

export const text = {
  text1: {
    fontFamily: "Assistant_700Bold",
    fontSize: 48,
  },
  text2: {
    fontFamily: "Assistant_400Regular",
    fontSize: 32,
  },
  text3: {
    fontFamily: "Assistant_400Regular",
    fontSize: 28,
  },
  text4: {
    fontFamily: "Assistant_400Regular",
    fontSize: 24,
  },
  text5: {
    fontFamily: "Assistant_400Regular",
    fontSize: 16,
  },
  text6: {
    fontFamily: "Assistant_400Regular",
    fontSize: 12,
  },
};

export const colors = {
  p_dark: "#014146",

  primary: "#376C71",

  p_light: "#659A9F",

  gray: "#676767",

  gray_light: "#AEAEAE",

  yellow: "#EEEAD1",

  white: "#FFFFFF",

  secondary: "#FFB4A3",

  black: "#2F2F2F",
};

export const theme = {
  ...DefaultTheme,
  roundness: 3.5,
  colors: {
    ...DefaultTheme.colors,
    primary: "#376C71",
    accent: "#FFCCBC",
    background: "#F9F9F9",
    onsurface: "#FFFFFF",
    text: "#6F6F6F",
    disabled: "#6F6F6F",
    placeholder: "#6A6A6A",
  },
};
