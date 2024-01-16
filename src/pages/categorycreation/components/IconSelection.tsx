import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {useRoute} from '@react-navigation/core';
import IconSelectionItem from './IconSelectionItem.tsx';

function IconSelection() {
  const route = useRoute();

  // @ts-ignore
  const listToRender = route.params.list;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      backgroundColor: '#B1BBAE',
    },
    iconSelectionView: {
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
      <View style={styles.iconSelectionView}>
        <SafeAreaView style={styles.container}>
          <FlatList
            numColumns={5}
            data={listToRender}
            renderItem={({item}) => (
              <IconSelectionItem key={item} value={item} />
            )}
            keyExtractor={item => item}
          />
        </SafeAreaView>
      </View>
    </View>
  );
}

export default IconSelection;
