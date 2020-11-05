import { useNavigation } from "@react-navigation/native";
import React from "react";
import { DataTable, IconButton } from "react-native-paper";

const Table = ({
  dataTable,
  professional,
  userInfo,
  editPatient,
  kitchen,
}: any) => {
  const { navigate } = useNavigation();
  function goToPatient(item: any) {
    if (editPatient) {
      navigate(`AdminAddPatient`, {
        patient: item,
        data: userInfo,
        editPatient,
      });
    } else {
      navigate(`ClinicPatient`, { patient: item.id, data: userInfo });
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
        {kitchen && <DataTable.Title>Etiqueta</DataTable.Title>}
      </DataTable.Header>

      {dataTable &&
        dataTable.map((_patient: any, index: any) => {
          return (
            <DataTable.Row
              key={index}
              onPress={() => {
                if (professional) {
                  goToMedic(_patient.id);
                } else {
                  goToPatient(_patient);
                }
              }}
            >
              <DataTable.Cell>{_patient?.personal?.name}</DataTable.Cell>
              <DataTable.Cell>{_patient?.hospitalization?.rh}</DataTable.Cell>
              <DataTable.Cell>{_patient?.personal?.birthday}</DataTable.Cell>
              <DataTable.Cell>{`${_patient?.hospitalization?.floor}º Andar | Quarto ${_patient?.hospitalization?.room}`}</DataTable.Cell>
              {kitchen && (
                <DataTable.Cell>
                  <IconButton
                    icon="ticket-confirmation"
                    color="#376C71"
                    size={20}
                    onPress={() => console.log("Pressed")}
                  />
                </DataTable.Cell>
              )}
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
