import { useNavigation } from "@react-navigation/native";
import React from "react";
import { DataTable } from "react-native-paper";
import { PatientProfile } from "./../../interfaces/patient.interface";

const Table = ({ dataTable, professional, userInfo, editPatient }: any) => {
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

  return (
    <DataTable style={{ zIndex: -10 }}>
      <DataTable.Header>
        <DataTable.Title>Nome</DataTable.Title>
        <DataTable.Title>RH</DataTable.Title>
        <DataTable.Title>Data de nascimento</DataTable.Title>
        <DataTable.Title>Localização</DataTable.Title>
      </DataTable.Header>

      {dataTable &&
        dataTable.map((_patient: PatientProfile, index: any) => {
          return (
            <DataTable.Row
              key={index}
              onPress={() => {
                goToPatient(_patient.id);
              }}
            >
              <DataTable.Cell>{_patient.personal.name}</DataTable.Cell>
              <DataTable.Cell>{_patient.hospitalization.rh}</DataTable.Cell>
              <DataTable.Cell>{_patient.personal.birthday}</DataTable.Cell>
              <DataTable.Cell>{`${_patient.hospitalization.floor}º Andar | Quarto ${_patient.hospitalization.room}`}</DataTable.Cell>
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
