import React from "react";
import { View, Text } from "react-native";
import { FAB } from "react-native-paper";
import Profile from "../../components/Profile";
import styles from "./styles";
// import { Container } from './styles';
import { AreaChart, Grid, PieChart } from "react-native-svg-charts";
import * as shape from "d3-shape";

const AdminCoordProfileMedicTerms: React.FC = () => {
  // const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];

  // const randomColor = () =>
  //   ("#" + ((Math.random() * 0xffffff) << 0).toString(16) + "000000").slice(
  //     0,
  //     7
  //   );

  // const pieData = data
  //   .filter((value) => value > 0)
  //   .map((value, index) => ({
  //     value,
  //     svg: {
  //       fill: randomColor(),
  //       onPress: () => console.log("press", index),
  //     },
  //     key: `pie-${index}`,
  //   }));

  // return <PieChart style={{ height: 200 }} data={pieData} />;
  return <Text>A</Text>;
};

export default AdminCoordProfileMedicTerms;
