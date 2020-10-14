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
    fontFamily: "Assistant_700Bold",
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  ra: {
    fontSize: theme.FONT_SIZE_SMALL,
  },
});

export default styles;
