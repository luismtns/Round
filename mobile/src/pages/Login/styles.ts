import { StyleSheet } from "react-native";
import theme, { colors, text } from "../../styles/theme.style";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  containerLogo: {
    flex: 1,
    justifyContent: "center",
  },
  containerInput: {
    flex: 1,
    backgroundColor: colors.p_dark,
    height: "100%",
    justifyContent: "center",
    flexDirection: "column",
  },
  inputBox: {
    padding: 72,
  },

  title: {
    fontSize: theme.FONT_SIZE_LARGE,
    fontFamily: "Assistant_700Bold",
    color: colors.white,
    marginBottom: 20,
  },

  logo: {
    width: "70%",
    height: 100,
    justifyContent: "center",
    padding: 20,
    alignSelf: "center",
    resizeMode: "contain",
    marginTop: 20,
    flex: 1,
  },

  forgotPass: {
    textAlign: "right",
    marginTop: 8,
    marginBottom: 32,
    fontFamily: "Assistant_400Regular",
    color: "#F8F8F8",
    textDecorationLine: "underline",
    letterSpacing: 0.5,
  },
  contactBorder: {
    textAlign: "center",
    marginTop: 32,
    marginBottom: 32,
    color: "#F8F8F8",
  },
  contact: {
    textAlign: "center",
    // font: text.text5,
    // fontFamily: "Assistant_400Regular",
    // fontSize: theme.FONT_SIZE_SMALL,
    color: "#F8F8F8",
    marginBottom: 16,
    lineHeight: 24,
  },
  contactAccount: {
    color: "#F8F8F8",
    fontFamily: "Assistant_600SemiBold",
  },
});

export default styles;
