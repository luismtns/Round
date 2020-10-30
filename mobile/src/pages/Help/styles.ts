import { StyleSheet } from "react-native";
import { colors, text } from "../../styles/theme.style";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    maxWidth: 640,
    width: "100%",
    maxHeight: 1200,
    height: "100%",
    margin: "auto",
    marginBottom: 48,
  },
  title: {
    fontFamily: "Assistant_400Regular",
    fontSize: text.text2,
    textAlign: "center",
    color: colors.gray,
    marginTop: 48,
    marginBottom: 32,
  },
  text: {
    fontFamily: "Assistant_400Regular",
    fontSize: text.text5,
    lineHeight: 22,
    color: colors.black,
  },
  logo: {
    width: "100%",
    height: 100,
    marginTop: 60,
  },
});

export default styles;
