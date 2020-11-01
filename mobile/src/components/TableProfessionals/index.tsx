import { useNavigation } from "@react-navigation/native";
import React from "react";
import { DataTable } from "react-native-paper";
import { ProfessionalProfile } from "./../../interfaces/professional.interface";

const TableProfessionals = ({ TableData }: any) => {
  const { navigate } = useNavigation();
  console.log(TableData);
  function goToProfessional(_pD: ProfessionalProfile) {
    console.log(_pD);

    // navigate(`AdminCoordProfileMedic`, {
    //   screen: `Informações Gerais`,
    //   params: { professional: id, data: userInfo },
    // });
  }

  return (
    <DataTable style={{ zIndex: -10 }}>
      <DataTable.Header>
        <DataTable.Title>Nome</DataTable.Title>
        <DataTable.Title>Código</DataTable.Title>
        <DataTable.Title>Cargo</DataTable.Title>
        <DataTable.Title>Alocação</DataTable.Title>
      </DataTable.Header>

      {TableData &&
        TableData.length > 1 &&
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
              <DataTable.Cell>{_pD.professional.specialty}</DataTable.Cell>
            </DataTable.Row>
          );
        })}

      <DataTable.Pagination
        page={1}
        numberOfPages={3}
        onPageChange={(page) => {
          console.log(page);
        }}
        label="1-2 of 6"
      />
    </DataTable>
  );
};

export default TableProfessionals;
