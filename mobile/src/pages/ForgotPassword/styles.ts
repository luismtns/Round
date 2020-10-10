import { StyleSheet } from "react-native";
import theme from "../../styles/theme.style";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.PRIMARY_BACKGROUND,
    padding: 20,
  },
  title: {
    fontSize: theme.FONT_SIZE_LARGE,
    fontFamily: "Assistant_700Bold",
  },
  subTitle: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontFamily: "Assistant_400Regular",
    marginTop: 12,
    marginBottom: 16,
  },
});

export default styles;
