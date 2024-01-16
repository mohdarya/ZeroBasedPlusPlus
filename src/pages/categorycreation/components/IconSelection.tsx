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
    bottomBarView: {
      height: 100,
    },
    amountStyle: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    otherPartsStyle: {
      width: '100%',
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'column',
      flex: 5,
    },
    otherPartsSectionStyle: {
      marginTop: 20,

      width: '50%',
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'row',
    },
  });

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignContent: 'space-between',
          margin: 20,
        }}>
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
