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
import ListSelectionItem from '../components/ListSelectionItem';
function ListSelection(props) {
  const navigation = useNavigation();
  const route = useRoute();

  const listToRender = route.params.list;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',

      backgroundColor: '#555B6E',
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

  console.log(listToRender);

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
              <ListSelectionItem key={item} value={item} />
            )}
            keyExtractor={item => item}
          />
        </SafeAreaView>
      </View>
    </View>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    amount: state.communication.numeric,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    returnNumeric: numeric => dispatch(returnNumeric(numeric)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListSelection);
