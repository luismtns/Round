import React from "react";
import { View } from "react-native";
import { Avatar, IconButton, Surface, Text } from "react-native-paper";
import { colors, text } from "../../styles/theme.style";
import styles from "./styles";

const Historic = () => {
  return (
    <Surface style={styles.containerPatientHistory}>
      <Text
        style={[styles.title, { fontSize: text.text3, color: colors.gray }]}
      >
        Histórico do paciente
      </Text>
      <View style={styles.historic}>
        <Text style={styles.titleHistoric}>16/02/2020</Text>
        <Text style={styles.content}>18:32 - Entrada</Text>
      </View>
      <View style={styles.historic}>
        <Text style={styles.titleHistoric}>16/02/2020</Text>
        <Text style={styles.content}>18:32 - Entrada</Text>
      </View>

      <View style={styles.observations}>
        <Text style={styles.titleHistoric}>Observações</Text>
        <Text style={styles.content}>
          Nunc nec odio non urna lacinia luctus id ut sem. Nullam id porta
          ipsum. Fusce vestibulum ullamcorper lorem id mollis. Integer sodales
          felis a aliquam pulvinar. Etiam vitae viverra erat. Aliquam imperdiet
          purus sit amet luctus porta. Donec sit amet lacinia magna.
        </Text>
      </View>
    </Surface>
  );
};

export default Historic;
