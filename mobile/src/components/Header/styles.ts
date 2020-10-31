import { StyleSheet } from "react-native";
import theme from "../../styles/theme.style";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  titles: {
    flexDirection: "column",
    paddingLeft: 20,
  },
  name: {
    fontFamily: "Assistant_600SemiBold",
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: "#F3F3F3",
  },
  role: {
    fontSize: theme.FONT_SIZE_SMALL,
    color: "#659A9F",
  },
});

export default styles;
