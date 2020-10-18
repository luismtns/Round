import React from "react";
import { View, Text } from "react-native";
import { List } from "react-native-paper";
import styles from "./styles";

const About: React.FC = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Título Sobre</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          nulla felis, finibus molestie ante sit amet, laoreet congue sapien.
          Duis vehicula erat in lectus mattis, vitae aliquet sapien tempor.
          Fusce neque justo, sodales id magna finibus, consequat commodo quam.
          Quisque tempus ullamcorper rutrum. Etiam consequat eros et felis
          auctor, id interdum tortor efficitur. Phasellus convallis libero elit,
          fermentum efficitur diam dignissim in. Donec mollis lorem quis dolor
          varius, sed porta nisl blandit. In pulvinar risus ac mi ullamcorper,
          ac fringilla magna luctus.
        </Text>
        <Text style={styles.text}>
          Aliquam tempor felis tellus, et rutrum magna auctor ac. Aenean
          malesuada porta massa. Praesent eget mi quam. Proin egestas imperdiet
          arcu, sed viverra nisl commodo non. Quisque venenatis tristique mi, id
          maximus turpis ullamcorper quis. Quisque porttitor elit metus, sed
          placerat lorem venenatis vel. Curabitur ut magna non nulla tincidunt
          condimentum. Mauris tincidunt laoreet est quis varius. Nam malesuada
          libero vitae erat porttitor vestibulum. Phasellus nec magna nec ante
          interdum volutpat accumsan non est. Nulla non sollicitudin dui. Aenean
          ut vestibulum libero.
        </Text>
        <Text style={styles.text}>
          Donec et luctus odio. Nam volutpat fermentum accumsan. Ut mattis erat
          a ex vehicula lacinia. Fusce sed risus neque. Sed congue orci eu
          rutrum gravida. Sed feugiat quam diam, eu ullamcorper justo commodo
          sed. Proin molestie ex bibendum lorem luctus, non efficitur velit
          fringilla. Duis sed orci ultricies, convallis orci et, cursus neque.
          Duis ultricies venenatis sapien. Etiam lacinia congue odio, at posuere
          eros sagittis nec. Maecenas aliquam augue dapibus dignissim tincidunt.
          Vivamus rhoncus at diam a rhoncus. Cras est felis, blandit eget urna
          vel, volutpat faucibus urna. Pellentesque aliquam egestas turpis non
          luctus. Proin at orci ipsum. Nulla molestie rutrum mi, sed
          pellentesque felis sodales sed. Ut vel luctus neque. Duis sit amet ex
          a purus luctus venenatis. Fusce ultricies nisl non lectus dictum
          ornare. Curabitur posuere purus ac risus viverra scelerisque. Etiam
          non elit risus.
        </Text>
      </View>
    </>
  );
};

export default About;
