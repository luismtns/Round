import React from "react";
import { View, Text, Modal } from "react-native";
import MainInput from "../MainInput";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";
import Button from "../Button";

const MainModal: React.FC<any> = ({ handleClose, show, children }) => {
  const showHideClassName = show ? true : false;
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={showHideClassName}
      onRequestClose={handleClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <AntDesign
            style={styles.icon}
            name="close"
            size={22}
            color="black"
            onPress={handleClose}
          />
          <Text>Código de acesso</Text>
          <Text>Lorem ipsum dolor sit amet</Text>
          <MainInput
            label="Teste"
            style={styles.outline}
            placeholder="Código"
          />
          <Button title="Continuar" onPress={() => {}} />
        </View>
      </View>
    </Modal>
  );
};

export default MainModal;
