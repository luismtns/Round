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
  text1: 48,
  text2: 32,
  text3: 28,
  text4: 24,
  text5: 16,
  text6: 12,
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
    accent: "#376C71",
    // background: "#FFFFFF",
    // onBackground: "#FFFFFF",
    // surface: "#fff",
    // onSurface: "#FFFFFF",
    // backdrop: "#fff",
    text: "#6F6F6F",
    disabled: "#6F6F6F",
    placeholder: "#6A6A6A",
  },
};
