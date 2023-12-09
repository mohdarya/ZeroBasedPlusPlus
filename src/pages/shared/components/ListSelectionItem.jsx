import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/core';
import {connect} from 'react-redux';
import {
  returnItemSelected,
  returnText,
} from '../../../redux/componentCommunication/action/ComponentCommunicationAction';

function ListSelectionItem(props) {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#555B6E',
      justifyContent: 'flex-start',
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
          margin: 10,
        }}>
        <View style={styles.amountStyle}>
          <View
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#FFD6BA',
              width: '90%',
              borderRadius: 15,
            }}>
            <TouchableOpacity
              onPress={() => {
                props.returnItemSelected(props.value);
                navigation.goBack();
              }}
              style={{color: '#BEE3DB', alignSelf: 'center'}}>
              <Text
                style={{
                  color: '#555B6E',
                  fontSize: 30,
                  alignSelf: 'center',
                  marginBottom: 5,
                }}>
                {props.value}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {};
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    returnItemSelected: item => dispatch(returnItemSelected(item)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListSelectionItem);
