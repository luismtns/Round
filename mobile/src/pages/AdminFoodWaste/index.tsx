import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { Surface } from 'react-native-paper';
import { LineChart, Grid, YAxis, XAxis } from 'react-native-svg-charts';

const AdminFoodWaste = ({ route, navigation }: any) => {
  const userInfo = route.params.data;

  const data1 = [0, 40, 35, 40, 38, 29, 40, 42, 56, 35, 53, 53];
  const data2 = [0, 66, 60, 58, 40, 42, 55, 62, 80, 45, 54, 59];
  const data3 = [
    0,
    66,
    60,
    58,
    40,
    42,
    55,
    62,
    80,
    45,
    54,
    59,
    0,
    66,
    60,
    58,
    40,
    42,
    55,
    62,
    80,
    45,
    54,
    59,
    55,
    62,
    80,
    45,
    54,
    59,
  ];

  const data4 = [0, 30, 62, 123, 157, 180, 200, 223, 250, 280, 298, 319];

  const data = [
    {
      data: data1,
      svg: { stroke: '#376C71' },
    },
    {
      data: data2,
      svg: { stroke: 'red' },
    },
  ];
  const verticalContentInset = { top: 10, bottom: 10 };
  const xAxisHeight = 30;
  const contentInset = { top: 20, bottom: 20 };
  const axesSvg = {
    fontSize: 12,
    fill: 'grey',
    fontFamily: 'Assistant_400Regular',
  };

  const months = [
    'JAN',
    'FEV',
    'MAR',
    'ABR',
    'MAI',
    'JUN',
    'JUL',
    'AGO',
    'SET',
    'OUT',
    'NOV',
    'DEZ',
  ];

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });

  useEffect(() => {
    navigation.setOptions({
      title: userInfo,
    });
  }, []);
  return (
    <>
      <View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Surface style={{ flex: 1, padding: 20, margin: 20 }}>
            <Text
              style={{
                paddingBottom: 16,
                fontSize: 20,
                fontFamily: 'Assistant_700Bold',
              }}
            >
              Desperdício anual
            </Text>
            <View style={{ height: 200, flexDirection: 'row' }}>
              <YAxis
                data={data2}
                style={{ marginBottom: xAxisHeight }}
                contentInset={verticalContentInset}
                svg={axesSvg}
                formatLabel={(value) => `${value} kgs`}
              />
              <View style={{ flex: 1, marginLeft: 10 }}>
                <LineChart
                  style={{ flex: 1 }}
                  data={data}
                  contentInset={verticalContentInset}
                  svg={{ stroke: 'rgb(134, 65, 244)' }}
                >
                  <Grid />
                </LineChart>
                <XAxis
                  style={{ marginHorizontal: -10, height: xAxisHeight }}
                  data={data1}
                  formatLabel={(value, index) => months[index]}
                  contentInset={{ left: 10, right: 10 }}
                  svg={axesSvg}
                />
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <Text
                style={{
                  color: 'red',
                  paddingRight: 10,
                  fontFamily: 'Assistant_700Bold',
                }}
              >
                Hospital
              </Text>
              <Text
                style={{ color: '#376C71', fontFamily: 'Assistant_700Bold' }}
              >
                ROUND
              </Text>
            </View>
          </Surface>

          <Surface style={{ flex: 1, padding: 20, margin: 20 }}>
            <Text
              style={{
                paddingBottom: 16,
                fontSize: 20,
                fontFamily: 'Assistant_700Bold',
              }}
            >
              Desperdício mensal
            </Text>
            <View style={{ height: 200, flexDirection: 'row' }}>
              <YAxis
                data={data1}
                style={{ marginBottom: xAxisHeight }}
                contentInset={verticalContentInset}
                svg={axesSvg}
                formatLabel={(value) => `${value / 10} kgs`}
              />
              <View style={{ flex: 1, marginLeft: 10 }}>
                <LineChart
                  style={{ flex: 1 }}
                  data={data3}
                  contentInset={verticalContentInset}
                  svg={{ stroke: 'rgb(134, 65, 244)' }}
                >
                  <Grid />
                </LineChart>
                <XAxis
                  style={{ marginHorizontal: -10, height: xAxisHeight }}
                  data={data3}
                  formatLabel={(value, index) => index}
                  contentInset={{ left: 10, right: 10 }}
                  svg={axesSvg}
                />
              </View>
            </View>
          </Surface>
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Surface style={{ flex: 1, padding: 20, margin: 20, height: '100%' }}>
            <Text
              style={{
                paddingBottom: 16,
                fontSize: 20,
                fontFamily: 'Assistant_700Bold',
              }}
            >
              Gastos financeiros
            </Text>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  color: '#376C71',
                }}
              >
                {formatter.format(12000)}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#376C71',
                }}
              >
                (até o momento)
              </Text>
            </View>
          </Surface>

          <Surface style={{ flex: 2, padding: 20, margin: 20, height: '100%' }}>
            <Text
              style={{
                paddingBottom: 16,
                fontSize: 20,
                fontFamily: 'Assistant_700Bold',
              }}
            >
              Desperdício total (em kgs)
            </Text>
            <View style={{ height: 200, flexDirection: 'row' }}>
              <YAxis
                data={data4}
                contentInset={contentInset}
                svg={{
                  fill: 'grey',
                  fontSize: 12,
                  fontFamily: 'Assistant_400Regular',
                }}
                numberOfTicks={10}
                formatLabel={(value) => `${value} kgs`}
              />
              <LineChart
                style={{ flex: 1, marginLeft: 16 }}
                data={data4}
                svg={{ stroke: 'rgb(134, 65, 244)' }}
                contentInset={contentInset}
              >
                <Grid />
              </LineChart>
            </View>
          </Surface>
        </View>

        <Text
          style={{
            fontSize: 14,
            color: 'gray',
            textAlign: 'right',
            marginVertical: 40,
            paddingRight: 20,
          }}
        >
          Todos os dados são fictícios e apenas simulam uma situação real.
        </Text>
      </View>
    </>
  );
};

export default AdminFoodWaste;
