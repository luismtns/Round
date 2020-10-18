import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  filter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerPatientData: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  containerDataAndHistory: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 20,
  },
  containerChangePatientData: {
    flex: 3,
    marginRight: 20,
    padding: 20,
  },
  title: {
    fontSize: 26,
    marginBottom: 12,
  },
  containerPatientHistory: {
    flex: 1,
    padding: 20,
  },
  restrictions: {
    marginVertical: 12,
  },
  subtitles: {
    marginBottom: 12,
  },
});

export default styles;
