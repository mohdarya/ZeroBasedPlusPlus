import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {useRoute} from '@react-navigation/core';
import ListSelectionItem from '../components/ListSelectionItem.tsx';

function ListSelection() {
  const route = useRoute();

  // @ts-ignore
  const listToRender = route.params.list;
  // @ts-ignore
  const stateVariable = route.params.stateVariable;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',

      backgroundColor: '#CFE1CB',
    },
    flatListWrapper: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignContent: 'space-between',
      margin: 20,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.flatListWrapper}>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={listToRender}
            renderItem={({item}) => (
              <ListSelectionItem
                key={item.id}
                id={item.id}
                value={item.name}
                stateVariable={stateVariable === undefined ? '' : stateVariable}
              />
            )}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </View>
    </View>
  );
}

export default ListSelection;
