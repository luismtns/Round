import { Assistant_700Bold } from "@expo-google-fonts/assistant";
import { StyleSheet } from "react-native";
import theme from "../../styles/theme.style";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: theme.PRIMARY_BACKGROUND,
  },
  containerLogo: {
    flex: 1,
  },
  containerInput: {
    flex: 1,
    backgroundColor: theme.SECONDARY_BACKGROUND,
    height: "100%",
    justifyContent: "center",
    flexDirection: "column",
  },
  inputBox: {
    padding: 40,
  },

  title: {
    fontSize: theme.FONT_SIZE_LARGE,
    fontFamily: "Assistant_700Bold",
    color: theme.TERTIARY_TEXT_COLOR,
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
    marginBottom: 16,
    fontFamily: "Assistant_400Regular",
    color: theme.TERTIARY_TEXT_COLOR,
    textDecorationLine: "underline",
    letterSpacing: 0.5,
  },
  contactBorder: {
    textAlign: "center",
    marginTop: 12,
    marginBottom: 30,
    color: theme.TERTIARY_TEXT_COLOR,
  },
  contact: {
    textAlign: "center",
    fontFamily: "Assistant_400Regular",
    fontSize: theme.FONT_SIZE_SMALL,
    color: theme.TERTIARY_TEXT_COLOR,
    marginBottom: 16,
    lineHeight: 22,
  },
  contactAccount: {
    color: theme.TERTIARY_TEXT_COLOR,
    fontFamily: "Assistant_700Bold",
    marginTop: 10,
    position: "relative",
    zIndex: 1,
  },
});

export default styles;
