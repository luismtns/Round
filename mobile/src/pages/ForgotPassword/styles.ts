import { StyleSheet } from "react-native";
import { colors } from "../../styles/theme.style";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  containerLogo: {
    flex: 1,
    justifyContent: "center",
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
    backgroundColor: colors.p_dark,
    height: "100%",
    justifyContent: "center",
    flexDirection: "column",
  },
  containerInput: {
    padding: 72,
  },
  title: {
    fontSize: 32,
    fontFamily: "Assistant_700Bold",
    color: "#fbfbfb",
  },
  subTitle: {
    fontSize: 20,
    fontFamily: "Assistant_400Regular",
    marginTop: 12,
    marginBottom: 16,
    color: "#fbfbfb",
  },
});

export default styles;
