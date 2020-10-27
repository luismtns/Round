import { StyleSheet } from "react-native";
import { colors, text } from "../../styles/theme.style";

const styles = StyleSheet.create({
  containerPatientHistory: {
    flex: 1,
    padding: 20,
    elevation: 2,
  },
  title: {
    marginBottom: 16,
  },
  historic: {
    marginBottom: 16,
  },
  titleHistoric: {
    color: colors.gray_light,
    fontSize: text.text5,
  },
  content: {
    color: colors.black,
    fontSize: text.text5,
  },
  observations: {
    paddingTop: 32,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.gray_light,
  },
});

export default styles;
