import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/core';
import {connect} from 'react-redux';
import {returnNumeric} from '../../../redux/componentCommunication/action/ComponentCommunicationAction';
import ListSelectionItem from '../components/ListSelectionItem.tsx';
import {RootState} from "../../../redux/rootReducer.tsx";


interface ListSelectionProps {

}
function ListSelection(props : ListSelectionProps) {
  const navigation = useNavigation();
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
            data={listToRender}
            renderItem={({item}) => (
              <ListSelectionItem key={item.id} id={item.id} value={item.name} stateVariable={stateVariable === undefined ? "" : stateVariable } />
            )}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </View>
    </View>
  );
}


export default ListSelection;
