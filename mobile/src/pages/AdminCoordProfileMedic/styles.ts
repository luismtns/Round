import { StyleSheet } from "react-native";
import { colors, text } from "../../styles/theme.style";

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
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
  fixedView: {},
});

export default styles;
