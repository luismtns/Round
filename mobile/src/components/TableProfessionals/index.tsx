import { useNavigation } from "@react-navigation/native";
import React from "react";
import { DataTable } from "react-native-paper";
import { ProfessionalProfile } from "./../../interfaces/professional.interface";

const TableProfessionals = ({ TableData, userInfo }: any) => {
  const { navigate } = useNavigation();

  function goToProfessional(_pD: ProfessionalProfile) {
    navigate(`AdminCoordProfileMedic`, {
      screen: `Informações Gerais`,
      params: { professional: _pD.personal.cpf, data: userInfo },
    });
  }

  return (
    <DataTable style={{ zIndex: -10 }}>
      <DataTable.Header>
        <DataTable.Title>Nome</DataTable.Title>
        <DataTable.Title>Código</DataTable.Title>
        <DataTable.Title>Cargo</DataTable.Title>
        <DataTable.Title>Admissão</DataTable.Title>
      </DataTable.Header>

      {TableData &&
        TableData.map((_pD: ProfessionalProfile) => {
          return (
            <DataTable.Row
              key={_pD.professional.code}
              onPress={() => {
                goToProfessional(_pD);
              }}
            >
              <DataTable.Cell>{_pD.personal.name}</DataTable.Cell>
              <DataTable.Cell>{_pD.professional.code}</DataTable.Cell>
              <DataTable.Cell>{_pD.professional.specialty}</DataTable.Cell>
              <DataTable.Cell>{_pD.professional.admission}</DataTable.Cell>
            </DataTable.Row>
          );
        })}
    </DataTable>
  );
};

export default TableProfessionals;
