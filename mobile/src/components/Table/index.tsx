import { useNavigation } from "@react-navigation/native";
import React from "react";
import { DataTable } from "react-native-paper";

const Table = ({ data, professional, userInfo, editPatient }: any) => {
  const { navigate } = useNavigation();
  function goToPatient(id: any) {
    if (editPatient) {
      navigate(`AdminAddPatient`, {
        patient: id,
        data: userInfo,
        editPatient,
      });
    } else {
      navigate(`ClinicPatient`, { patient: id, data: userInfo });
    }
  }

  function goToMedic(id: any) {
    navigate(`AdminCoordProfileMedic`, {
      screen: `Informações Gerais`,
      params: { professional: id, data: userInfo },
    });
  }

  return (
    <DataTable style={{ zIndex: -10 }}>
      <DataTable.Header>
        <DataTable.Title>Nome</DataTable.Title>
        <DataTable.Title>RH</DataTable.Title>
        <DataTable.Title>Data de nascimento</DataTable.Title>
        {professional ? (
          <DataTable.Title>Área</DataTable.Title>
        ) : (
          <DataTable.Title>Localização</DataTable.Title>
        )}
      </DataTable.Header>

      {data.map((item: any, index: any) => {
        return (
          <DataTable.Row
            key={index}
            onPress={() => {
              if (professional) {
                goToMedic(item.id);
              } else {
                goToPatient(item.id);
              }
            }}
          >
            <DataTable.Cell>{item.name}</DataTable.Cell>
            <DataTable.Cell>{item.ra}</DataTable.Cell>
            <DataTable.Cell>{item.nascimento}</DataTable.Cell>
            <DataTable.Cell>{item.quarto}</DataTable.Cell>
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

export default Table;
