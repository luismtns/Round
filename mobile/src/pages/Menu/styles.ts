import { StyleSheet } from "react-native";
import theme from "../../styles/theme.style";
const styles = StyleSheet.create({
  title: {
    fontFamily: "Assistant_700Bold",
    fontSize: theme.FONT_SIZE_LARGE,
  },
  subTitle: {
    fontFamily: "Assistant_400Regular",
    fontSize: theme.FONT_SIZE_MEDIUM,
  },

  boxText: {
    fontFamily: "Assistant_400Regular",
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.TERTIARY_COLOR,

    paddingLeft: 20,
  },
  icon: {
    paddingLeft: 20,
  },
  text: {
    fontSize: 22,
    color: "#ffffff",
    textAlign: "center",
  },

  openButton: {},
});

export default styles;
