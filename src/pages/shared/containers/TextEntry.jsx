import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/core';
import {connect} from 'react-redux';
import {returnText} from '../../../redux/componentCommunication/action/ComponentCommunicationAction';

function TextEntry(props) {
  const navigation = useNavigation();
  const route = useRoute();

  const placeHolderText = route.params.placeHolderText;
  const textInputName = route.params.textInputName;
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
          margin: 20,
          marginTop: '50%',
        }}>
        <View style={styles.amountStyle}>
          <View style={{flex: 1, display: 'flex', alignItems: 'center'}}>
            <Text style={{color: '#BEE3DB', fontSize: 50, alignSelf: 'center'}}>
              {textInputName}
            </Text>
            <View>
              <TextInput
                defaultValue={String(props.text)}
                pointerEvents={'none'}
                placeholder={placeHolderText}
                selectTextOnFocus={true}
                autoFocus={true}
                onSubmitEditing={event => {}}
                onEndEditing={event => {
                  navigation.goBack();
                }}
                onChangeText={text => {
                  props.returnText(text);
                }}
                keyboardType={'text'}
                style={{
                  color: '#BEE3DB',
                  fontSize: 35,
                  textAlign: 'center',
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    text: state.communication.text,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    returnText: text => dispatch(returnText(text)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TextEntry);
