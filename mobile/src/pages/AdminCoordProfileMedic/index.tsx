import React from "react";
import { View, Text, ScrollView } from "react-native";
import { FAB, Portal, Surface } from "react-native-paper";
import Profile from "../../components/Profile";
import styles from "./styles";
// import { Container } from './styles';

const AdminCoordProfileMedic: React.FC = (props: any) => {
  // const medic_uuid = props.route.params.medic;
  console.log(props.route.params);

  return (
    <View>
      <ScrollView style={styles.container}>
        {/* <Profile />* */}

        <Surface
          style={{
            flex: 1,
            flexDirection: "row",
            padding: 16,
            marginTop: 16,
          }}
        >
          <View style={{ flex: 1 }}>
            <View>
              <Text style={styles.title}>Dados pessoais</Text>
              <View style={styles.content}>
                <Text style={styles.contentName}>Nome</Text>
                <Text style={styles.contentDetail}>Bruno Santos Silva</Text>
              </View>

              <View style={styles.content}>
                <Text style={styles.contentName}>CRM</Text>
                <Text style={styles.contentDetail}>1234567/00</Text>
              </View>

              <View style={styles.content}>
                <Text style={styles.contentName}>Data de nascimento</Text>
                <Text style={styles.contentDetail}>28/05/1980</Text>
              </View>

              <View style={styles.content}>
                <Text style={styles.contentName}>Nacionalidade</Text>
                <Text style={styles.contentDetail}>Brasileiro</Text>
              </View>

              <View style={styles.content}>
                <Text style={styles.contentName}>Naturalidade</Text>
                <Text style={styles.contentDetail}>Jundiaí</Text>
              </View>

              <View style={styles.content}>
                <Text style={styles.contentName}>Gênero</Text>
                <Text style={styles.contentDetail}>Masculino</Text>
              </View>
            </View>

            <View>
              <Text
                style={[
                  styles.title,
                  {
                    marginTop: 12,
                    borderTopColor: "#e3e3e3",
                    borderTopWidth: 1,
                    paddingTop: 12,
                  },
                ]}
              >
                Endereço
              </Text>
              <View style={styles.content}>
                <Text style={styles.contentName}>CEP</Text>
                <Text style={styles.contentDetail}>12.345 - 678</Text>
              </View>

              <View style={styles.content}>
                <Text style={styles.contentName}>Número</Text>
                <Text style={styles.contentDetail}>123</Text>
              </View>

              <View style={styles.content}>
                <Text style={styles.contentName}>Complemento</Text>
                <Text style={styles.contentDetail}>Apto. 12</Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <View>
              <Text style={styles.title}>Endereço</Text>
              <View style={styles.content}>
                <Text style={styles.contentName}>CEP</Text>
                <Text style={styles.contentDetail}>12.345 - 678</Text>
              </View>

              <View style={styles.content}>
                <Text style={styles.contentName}>Número</Text>
                <Text style={styles.contentDetail}>123</Text>
              </View>

              <View style={styles.content}>
                <Text style={styles.contentName}>Complemento</Text>
                <Text style={styles.contentDetail}>Apto. 12</Text>
              </View>
            </View>

            <View>
              <Text
                style={[
                  styles.title,
                  {
                    marginTop: 12,
                    borderTopColor: "#e3e3e3",
                    borderTopWidth: 1,
                    paddingTop: 12,
                  },
                ]}
              >
                Endereço
              </Text>
              <View style={styles.content}>
                <Text style={styles.contentName}>CEP</Text>
                <Text style={styles.contentDetail}>12.345 - 678</Text>
              </View>

              <View style={styles.content}>
                <Text style={styles.contentName}>Número</Text>
                <Text style={styles.contentDetail}>123</Text>
              </View>

              <View style={styles.content}>
                <Text style={styles.contentName}>Complemento</Text>
                <Text style={styles.contentDetail}>Apto. 12</Text>
              </View>
            </View>

            <View>
              <Text
                style={[
                  styles.title,
                  {
                    marginTop: 12,
                    borderTopColor: "#e3e3e3",
                    borderTopWidth: 1,
                    paddingTop: 12,
                  },
                ]}
              >
                Endereço
              </Text>
              <View style={styles.content}>
                <Text style={styles.contentName}>CEP</Text>
                <Text style={styles.contentDetail}>12.345 - 678</Text>
              </View>

              <View style={styles.content}>
                <Text style={styles.contentName}>Número</Text>
                <Text style={styles.contentDetail}>123</Text>
              </View>

              <View style={styles.content}>
                <Text style={styles.contentName}>Complemento</Text>
                <Text style={styles.contentDetail}>Apto. 12</Text>
              </View>
            </View>
          </View>
        </Surface>
      </ScrollView>

      <FAB
        style={styles.fab}
        label="Editar"
        small
        icon="pencil"
        onPress={() => console.log("Pressed")}
      />
    </View>
  );
};

export default AdminCoordProfileMedic;
