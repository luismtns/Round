import { StyleSheet } from "react-native";
import theme, { colors, text } from "../../styles/theme.style";

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
  container: {
    padding: 16,
  },
  title: {
    fontSize: text.text3,
    color: colors.gray,
    marginBottom: 16,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 12,
  },
  contentName: {
    flex: 1,
  },
  contentDetail: {
    flex: 1,
  },
});

export default styles;
