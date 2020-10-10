import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "80%",
    backgroundColor: "white",
    padding: 30,
    elevation: 5,
  },
  outline: {
    borderWidth: 1,
    marginVertical: 16,
  },
  icon: {
    marginBottom: 4,
    textAlign: "right",
  },
});

export default styles;
