import { StyleSheet } from "react-native";
import theme from "../../styles/theme.style";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    maxWidth: 1200,
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  containerTag: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    color: "#014146",
    fontFamily: "Assistant_600SemiBold",
    marginBottom: 16,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 12,
  },
  contentName: {
    color: theme.SECONDARY_TEXT_COLOR,
    fontWeight: "600",
    flex: 1,
    fontSize: 16,
  },
  contentDetail: {
    flex: 1,
    fontSize: 16,
  },
});

export default styles;
