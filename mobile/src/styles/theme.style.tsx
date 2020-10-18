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
  SECONDARY_BACKGROUND: "#659a9f",
  TERTIARY_BACKGROUND: "#f9f9f9",
  BORDER: 10,
  PADDING_MEDIUM: 16,
};

export const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#376C71",
    accent: "#FFCCBC",
    background: "#F9F9F9",
    onsurface: "#FFFFFF",
    text: "#6F6F6F",
    disabled: "#6F6F6F",
    placeholder: "#014146",
  },
};
