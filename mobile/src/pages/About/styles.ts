import { StyleSheet } from "react-native";
import { colors, text } from "../../styles/theme.style";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    maxWidth: 640,
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
    width: "70%",
    height: 100,
    justifyContent: "center",
    padding: 20,
    alignSelf: "center",
    resizeMode: "contain",
    marginTop: 28,
    flex: 1,
  },
});

export default styles;
