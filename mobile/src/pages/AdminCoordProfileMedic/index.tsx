import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { FAB, Surface } from "react-native-paper";
import { firebaseDataService } from "../../services/data";
import styles from "./styles";
// import { Container } from './styles';
import { useNavigation } from "@react-navigation/native";
import { ProfessionalProfile } from "./../../interfaces/professional.interface";

const AdminCoordProfileMedic: React.FC = (props: any) => {
  const { navigate } = useNavigation();
  const professional_uuid = props.route.params.professional;
  const userInfo = props.route.params.data;
  const [professionalInfo, setProfessionalInfo] = useState<
    ProfessionalProfile
  >();

  useEffect(() => {
    firebaseDataService.getProfessional(professional_uuid).then((data: any) => {
      setProfessionalInfo(data);
    });
  }, []);
  function goToEditProfessional() {
    var destination =
      professionalInfo?.professional_type == "medic"
        ? "AdminAddProfessional"
        : "AdminAddProfessionalGeneral";
    navigate(destination, {
      data: userInfo,
      edit: professionalInfo,
    });
  }
  return (
    <View>
      <ScrollView style={styles.container}>
        {/* <Profile /> */}

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
                <Text style={styles.contentDetail}>
                  {professionalInfo?.personal?.name}
                </Text>
              </View>

              <View style={styles.content}>
                <Text style={styles.contentName}>CRM</Text>
                <Text style={styles.contentDetail}>
                  {professionalInfo?.professional?.crm}
                </Text>
              </View>

              <View style={styles.content}>
                <Text style={styles.contentName}>Data de nascimento</Text>
                <Text style={styles.contentDetail}>
                  {professionalInfo?.personal?.birthday}
                </Text>
              </View>

              <View style={styles.content}>
                <Text style={styles.contentName}>Nacionalidade</Text>
                <Text style={styles.contentDetail}>
                  {professionalInfo?.personal?.nationality}
                </Text>
              </View>

              <View style={styles.content}>
                <Text style={styles.contentName}>Naturalidade</Text>
                <Text style={styles.contentDetail}>
                  {professionalInfo?.personal?.citizenship}
                </Text>
              </View>

              <View style={styles.content}>
                <Text style={styles.contentName}>Gênero</Text>
                <Text style={styles.contentDetail}>
                  {professionalInfo?.personal?.gender}
                </Text>
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
                <Text style={styles.contentDetail}>
                  {professionalInfo?.personal?.cpf}
                </Text>
              </View>

              <View style={styles.content}>
                <Text style={styles.contentName}>Número</Text>
                <Text style={styles.contentDetail}></Text>
              </View>

              <View style={styles.content}>
                <Text style={styles.contentName}>Complemento</Text>
                <Text style={styles.contentDetail}></Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <View>
              <Text style={styles.title}>Dados bancários</Text>
              <View style={styles.content}>
                <Text style={styles.contentName}>Banco</Text>
                <Text style={styles.contentDetail}></Text>
              </View>

              <View style={styles.content}>
                <Text style={styles.contentName}>Agência</Text>
                <Text style={styles.contentDetail}></Text>
              </View>

              <View style={styles.content}>
                <Text style={styles.contentName}>Conta</Text>
                <Text style={styles.contentDetail}></Text>
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
                Contatos
              </Text>
              <View style={styles.content}>
                <Text style={styles.contentName}>E-mail</Text>
                <Text style={styles.contentDetail}></Text>
              </View>

              <View style={styles.content}>
                <Text style={styles.contentName}>Celular</Text>
                <Text style={styles.contentDetail}></Text>
              </View>

              <View style={styles.content}>
                <Text style={styles.contentName}>Residência</Text>
                <Text style={styles.contentDetail}></Text>
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
                Contatos de emergência
              </Text>
              <View style={styles.content}>
                <Text style={styles.contentName}>Nome</Text>
                <Text style={styles.contentDetail}></Text>
              </View>

              <View style={styles.content}>
                <Text style={styles.contentName}>Celular</Text>
                <Text style={styles.contentDetail}></Text>
              </View>

              <View style={styles.content}>
                <Text style={styles.contentName}>Parentesco</Text>
                <Text style={styles.contentDetail}></Text>
              </View>
            </View>
          </View>
        </Surface>
      </ScrollView>

      <div style={{ position: "fixed", bottom: "1em", right: "1em" }}>
        <FAB
          style={styles.fab}
          label="Editar"
          small
          icon="pencil"
          onPress={() => goToEditProfessional()}
        />
      </div>
    </View>
  );
};

export default AdminCoordProfileMedic;
