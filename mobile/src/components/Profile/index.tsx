import React from "react";
import { View } from "react-native";
import { Avatar, IconButton, Surface, Text } from "react-native-paper";
import styles from "./styles";

const Profile = () => {
  return (
    <Surface style={styles.containerPatientData}>
      <View style={styles.imgCompany}>
        <IconButton
          icon="pencil"
          color="#EDEDED"
          size={20}
          style={{ zIndex: 50 }}
          onPress={() => console.log("Pressed")}
        />
        <Avatar.Icon
          size={120}
          icon="account"
          style={{
            borderRadius: 4,
            position: "absolute",
            height: "100%",
            width: 100,
          }}
        />
      </View>
      <View style={{ flexDirection: "column", flex: 6 }}>
        <View
          style={{
            flex: 6,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 12,
            marginBottom: 12,
            borderBottomWidth: 1,
            borderBottomColor: "#000",
          }}
        >
          <Text>Nome: Nome do paciente</Text>
          <Text>RA: 234234423</Text>
        </View>
        <View
          style={{
            flex: 6,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>Convênio: Privado | SUS</Text>
          <Text>Data de nascimento: 12/03/2014</Text>
          <Text>Data de nascimento: 12/03/2014</Text>
        </View>
      </View>
    </Surface>
  );
};

export default Profile;
