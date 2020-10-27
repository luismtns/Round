import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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

    justifyContent: "center",
    shadowColor: "transparent",
  },
});

export default styles;
