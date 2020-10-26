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
  containerForgotPassword: {
    flex: 1,
    backgroundColor: theme.SECONDARY_BACKGROUND,
    height: "100%",
    justifyContent: "center",
    flexDirection: "column",
  },
  containerInput: {
    padding: 72,
  },
  title: {
    fontSize: theme.FONT_SIZE_LARGE,
    fontFamily: "Assistant_700Bold",
    color: theme.TERTIARY_TEXT_COLOR,
  },
  subTitle: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontFamily: "Assistant_400Regular",
    marginTop: 12,
    marginBottom: 16,
    color: theme.TERTIARY_TEXT_COLOR,
  },
});

export default styles;
