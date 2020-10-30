import { StyleSheet } from "react-native";
import theme, { colors, text } from "../../styles/theme.style";

const styles = StyleSheet.create({
  containerInputs: {
    padding: 20,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  item: {
    width: "25%",
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  title: {
    fontSize: text.text3,
    color: colors.gray,
    marginTop: 16,
    marginLeft: 16,
  },
  imgCompany: {
    height: 100,
    width: 100,
    alignSelf: "center",
  },
});

export default styles;
