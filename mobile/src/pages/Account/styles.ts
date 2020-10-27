import { StyleSheet } from "react-native";
import theme from "../../styles/theme.style";

const styles = StyleSheet.create({
  containerLogout: {
    flex: 1,
    flexDirection: "row",
    padding: 32,
    maxWidth: 900,
    width: "100%",
    margin: "auto",
  },
  textLogout: {
    color: "#B00020",
  },
  imgCompany: {
    flex: 1,
    position: "relative",
  },
  infoCompany: {
    flex: 3,
  },
  changePhoto: {
    marginTop: 32,
  },
  inputBlock: {
    marginTop: 32,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titles: {
    fontSize: 28,
    marginBottom: 10,
  },
  saveButton: {
    flex: 1,
    width: 100,
    height: "initial",
  },
  input: {
    height: 50,
    marginBottom: 12,
    width: "48%",
  },
  accountBlock: {
    width: "100%",
    paddingLeft: 0,
  },
});

export default styles;
