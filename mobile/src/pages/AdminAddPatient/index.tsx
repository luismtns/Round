import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import SegmentedControl from "@react-native-community/segmented-control";
import { TextInput } from "react-native-paper";
// import { Container } from './styles';

const AdminAddPatient: React.FC = () => {
  const [selectIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <SegmentedControl
        values={["Cadastro", "Upload de arquivos"]}
        selectedIndex={selectIndex}
        style={{
          height: 50,
          borderRadius: 0,
          borderColor: "#0C6970",
          borderTopColor: "#B0B0B000",
        }}
        activeTextColor="#0C6970"
        backgroundColor="#0C6970"
        tintColor="#fff"
        onChange={(event) => {
          console.log(event);
          setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
        }}
      />
      {selectIndex === 0 ? (
        <View style={styles.containerInputs}>
          <Text>Dados pessoais</Text>
          <View style={{ flexDirection: "row" }}>
            <TextInput style={{ flex: 3 }} label="Nome" />
            <TextInput style={{ flex: 1 }} label="Data de nascimento" />
          </View>
          <View style={{ flexDirection: "row" }}>
            <TextInput style={{ flex: 1 }} label="Estado civil" />
            <TextInput style={{ flex: 1 }} label="Nacionalidade" />
            <TextInput style={{ flex: 1 }} label="Naturalidade" />
            <TextInput style={{ flex: 1 }} label="Sexo" />
          </View>
        </View>
      ) : (
        <Text>Não é</Text>
      )}
    </>
  );
};

export default AdminAddPatient;
