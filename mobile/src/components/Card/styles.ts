import { StyleSheet } from "react-native";
import theme from "../../styles/theme.style";
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  touch: {
    width: "100%",
    height: 150,
    borderRadius: theme.BORDER,
    marginBottom: 20,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  label: {
    fontFamily: "Assistant_400Regular",
  },
});

export default styles;
