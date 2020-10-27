import { StyleSheet } from "react-native";
import { text } from "../../styles/theme.style";

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
    height: 160,
    margin: 10,
    justifyContent: "flex-end",
  },
  title: {
    fontSize: text.text3,
    fontFamily: "Assistant_600SemiBold",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: "Assistant_400Regular",
  },
});

export default styles;
