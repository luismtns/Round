import { useNavigation } from "@react-navigation/native";
import React from "react";
import { DataTable, IconButton } from "react-native-paper";

const TableKitchen = ({ data }: any) => {
  const { navigate } = useNavigation();

  function goToKitchenTag(id: any) {
    navigate(`KitchenTag`);
  }

  return (
    <DataTable style={{ zIndex: -10 }}>
      <DataTable.Header>
        <DataTable.Title>Nome</DataTable.Title>
        <DataTable.Title>RH</DataTable.Title>
        <DataTable.Title>Data de nascimento</DataTable.Title>
        <DataTable.Title>Localização</DataTable.Title>
        <DataTable.Title>Etiquetas</DataTable.Title>
      </DataTable.Header>

      {data.map((item: any) => {
        return (
          <DataTable.Row
            key={item.id}
            onPress={() => {
              goToKitchenTag(item);
            }}
          >
            <DataTable.Cell>{item.name}</DataTable.Cell>
            <DataTable.Cell>{item.ra}</DataTable.Cell>
            <DataTable.Cell>{item.nascimento}</DataTable.Cell>
            <DataTable.Cell>{item.quarto}</DataTable.Cell>
            <DataTable.Cell>
              <IconButton icon="ticket-account"></IconButton>
            </DataTable.Cell>
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

export default TableKitchen;
