import { StyleSheet } from "react-native";
import theme from "../../styles/theme.style";

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  optionsRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  optionsContainer: {
    padding: 20,
    borderRadius: 6,
  },
});

export default styles;
