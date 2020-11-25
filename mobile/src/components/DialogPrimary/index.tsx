import * as React from "react";
import { View } from "react-native";
import { Button, Paragraph, Dialog, Portal } from "react-native-paper";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";

const DialogPrimary = ({
  title,
  paragraph,
  button,
  buttonAction,
  show,
  hide,
  onAction,
  hideModal,
}: any) => {
  const visible = show ? true : false;

  return (
    <Portal>
      <Dialog onDismiss={onAction ? onAction : hide} visible={visible}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          <Paragraph>{paragraph}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hide}>{button}</Button>
          <Button color="red" onPress={onAction}>
            {buttonAction}
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default DialogPrimary;
