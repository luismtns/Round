import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    color: "#014146",
    fontFamily: "Assistant_600SemiBold",
  },
  filter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 12,
  },
  searchBar: {
    flex: 3,
  },
  searchButton: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    shadowColor: "transparent",
  },
});

export default styles;
