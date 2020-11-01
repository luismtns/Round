import React, { useLayoutEffect, useState } from "react";
import { View, Text } from "react-native";
import { Avatar } from "react-native-paper";
import styles from "./styles";

interface ProfessionalProps {
  name?: "string";
  ra?: "string";
}

const Header: React.FC<ProfessionalProps> = (props: any) => {
  const [userInfo, setUserInfo] = useState<any>({});

  useLayoutEffect(() => {
    setUserInfo(props?.children);
    console.log("te");
  }, [props?.children.personal]);

  return (
    <>
      {props.children.personal && (
        <View style={styles.container}>
          <Avatar.Text
            size={40}
            labelStyle={styles.role}
            label={userInfo.personal?.name.slice(0, 2).toLocaleUpperCase()}
          />
          <View style={styles.titles}>
            <Text style={styles.name}>{userInfo.personal?.name}</Text>
            <Text style={styles.role}>{userInfo.professional?.specialty}</Text>
          </View>
        </View>
      )}
    </>
  );
};

export default Header;
