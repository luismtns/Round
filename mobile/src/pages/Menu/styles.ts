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
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    padding: 20,
  },
  card: {
    width: "100%",
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
  modalContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
  },

  modalIcon: {
    maxWidth: 100,
    maxHeight: 100,
    height: "100%",
    width: "100%",
    alignSelf: "center",
    margin: 40,
  },

  modalActions: {
    width: "100%",
  },
});

export default styles;
