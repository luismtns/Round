import React from "react";
import { View, Text, Image } from "react-native";
import { colors, text } from "../../styles/theme.style";

const EmptyAlert = () => {
  return (
    <View style={{ alignSelf: "center", marginTop: 56 }}>
      <Text
        style={{
          fontSize: text.text4,
          color: colors.gray_light,
          marginBottom: 32,
        }}
      >
        Nenhuma ficha alimentar foi{"\n"} alterada nesse turno ainda.
      </Text>
      <Image
        source={require("../../assets/medic_illust.png")}
        style={{
          width: 120,
          height: 310,
          alignSelf: "center",
        }}
      />
    </View>
  );
};

export default EmptyAlert;
