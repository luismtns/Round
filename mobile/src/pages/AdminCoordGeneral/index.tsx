import React, { useEffect, useState } from 'react';
import styles from './styles';

import { View, Text } from 'react-native';
import { FAB } from 'react-native-paper';
import { firebaseDataService } from '../../services/data/index';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import SearchSection from '../../components/SearchSection';
import TableProfessionals from './../../components/TableProfessionals/index';
import { ProfessionalProfile } from './../../interfaces/professional.interface';

const AdminCoordGeneral: React.FC = ({ route, navigation }: any) => {
  const { navigate } = useNavigation();
  const userInfo = route.params.data;
  const [dataTable, setDataTable] = useState();
  const [search, setSearch] = useState<any>();

  const isVisible = useIsFocused();

  function goToAddNewProfessional() {
    navigate('AdminAddProfessionalGeneral', { data: userInfo });
  }

  function filterData({ patient, filter }: any) {
    setDataTable(
      search
        ?.filter(function (data: ProfessionalProfile) {
          return (
            data.personal.name.toLowerCase().indexOf(patient.toLowerCase()) >
              -1 ||
            data.professional.code == patient.toLowerCase().trim() ||
            data.professional.crm == patient.toLowerCase().trim()
          );
        })
        .sort((a: any, b: any) => {
          switch (filter) {
            case 'Recentes':
              return a.timestamp.toDate() > b.timestamp.toDate() ? -1 : 1;
            case 'A-Z':
              return a.personal.name.localeCompare(b.personal.name);
          }
        })
    );
  }

  useEffect(() => {
    navigation.setOptions({
      title: userInfo,
    });
    // Table Data Observable
    const unsubscribe = firebaseDataService.getProfessionalSnapshot(
      30,
      'general',
      {
        next: (querySnapshot: any) => {
          var arrayQuery = querySnapshot.docs.map((doc: any) => doc.data());
          setDataTable(arrayQuery);
          setSearch(arrayQuery);
        },
        error: (err: any) => console.log(err),
      }
    );
    return unsubscribe;
  }, [isVisible]);

  return (
    <>
      <div style={{ position: 'fixed', bottom: '1em', right: '1em' }}>
        <FAB
          style={styles.fab}
          small
          label="Adicionar"
          icon="plus"
          onPress={goToAddNewProfessional}
        />
      </div>
      <View style={styles.container}>
        <Text style={styles.title}>Equipe geral</Text>
        <SearchSection searchProp={filterData} />
        {dataTable && (
          <TableProfessionals TableData={dataTable} userInfo={userInfo} />
        )}
      </View>
    </>
  );
};

export default AdminCoordGeneral;
