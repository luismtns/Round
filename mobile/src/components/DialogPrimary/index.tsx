import * as React from "react";
import { View } from "react-native";
import { Button, Paragraph, Dialog, Portal } from "react-native-paper";

const DialogPrimary = ({
  title,
  paragraph,
  button,
  buttonAction,
  show,
  hide,
  action,
  hideModal,
}: any) => {
  const visible = show ? true : false;

  return (
    <View>
      <Portal>
        <Dialog visible={visible}>
          <Dialog.Title>{title}</Dialog.Title>
          <Dialog.Content>
            <Paragraph>{paragraph}</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hide}>{button}</Button>
            <Button onPress={action}>{buttonAction}</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default DialogPrimary;
