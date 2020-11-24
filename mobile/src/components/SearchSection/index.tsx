import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Menu, Provider, Searchbar } from 'react-native-paper';
import styles from './styles';

const SearchSection = (props: any) => {
  const [patient, setPatient] = useState('');
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState('Recentes');

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  function handleSearch() {
    console.log(patient, filter);
    props.searchProp({ patient, filter });
  }

  return (
    <View style={styles.filter}>
      <Searchbar
        placeholder="Pesquisar"
        onChangeText={setPatient}
        value={patient}
        style={[
          styles.searchBar,
          { backgroundColor: '#EEEEEE', shadowColor: 'transparent' },
        ]}
        inputStyle={{ color: '#AEAEAE' }}
        onIconPress={handleSearch}
      />
      <Provider>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Menu
            visible={visible}
            style={{ top: 50, zIndex: 15 }}
            onDismiss={closeMenu}
            anchor={
              <Button onPress={openMenu} color="#AEAEAE" icon="filter-variant">
                {filter}
              </Button>
            }
          >
            <View>
              <Menu.Item
                onPress={() => {
                  setFilter('Recentes');
                  setVisible(false);
                }}
                title="Recentes"
              />
              <Menu.Item
                onPress={() => {
                  setFilter('a-z');
                  setVisible(false);
                }}
                title="a-z"
              />
            </View>
          </Menu>
        </View>
      </Provider>
      <Button
        mode="outlined"
        style={styles.searchButton}
        onPress={handleSearch}
      >
        Pesquisar
      </Button>
    </View>
  );
};

export default SearchSection;
