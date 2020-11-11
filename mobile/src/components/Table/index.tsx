import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { DataTable, IconButton } from "react-native-paper";
import DialogPrimary from "./../DialogPrimary/index";
import { PatientProfile } from "./../../interfaces/patient.interface";
import { firebaseDataService } from "./../../services/data/index";

const Table = ({
  dataTable,
  professional,
  userInfo,
  editPatient,
  dischargePatient,
  kitchen,
}: any) => {
  const { navigate } = useNavigation();

  const [Dialog, setDialog] = useState<any>({
    title: "",
    label: "",
    open: false,
    item: null,
  });

  function goToPatient(item: any) {
    if (editPatient) {
      navigate(`AdminAddPatient`, {
        patient: item,
        data: userInfo,
        editPatient,
      });
    } else if (dischargePatient) {
      setDialog({
        title: "Confirme a Alta do Paciente.",
        label: `Deseja dar alta ao paciente ${item.personal.name} ?`,
        open: true,
        patient: item,
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

  function goToKitchenTag(id: any) {
    navigate(`KitchenTag`, { professional: id, data: userInfo });
  }

  function finallyDischargePatient() {
    var name_patient = Dialog?.patient?.personal?.name;
    firebaseDataService
      .dischargePatient(Dialog.patient)
      .then((e) => {
        setDialog({
          title: "Sucesso!",
          label: `Alta do Paciente ${name_patient} feita com sucesso!`,
          open: true,
          patient: null,
        });
      })
      .catch((err) => {
        setDialog({
          title: "Ops!",
          label: `Erro ao realizar a alta do paciente ${name_patient}, verifique se a mesma ja não foi feita e atualize a lista!`,
          open: true,
          patient: null,
        });
      });
  }

  return (
    <>
      <DialogPrimary
        show={Dialog.open}
        title={Dialog.title}
        paragraph={Dialog.label}
        hide={Dialog.patient ? finallyDischargePatient : null}
        button={Dialog.patient ? "Sim" : null}
        buttonAction={Dialog.open ? (Dialog.patient ? "Não" : "Fechar") : ""}
        onAction={() => {
          setDialog({
            title: "",
            label: "",
            open: false,
            patient: null,
          });
        }}
      />
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
                    if (kitchen) {
                      goToKitchenTag(_patient);
                    } else {
                      goToPatient(_patient);
                    }
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
      </DataTable>
    </>
  );
};

export default Table;
