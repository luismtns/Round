import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontFamily: "Assistant_700Bold",
    fontSize: 32,
  },
  subTitle: {
    fontFamily: "Assistant_400Regular",
    fontSize: 20,
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
    fontSize: 20,
    color: "#F1F1ED",

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
    maxWidth: 80,
    maxHeight: 80,
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
