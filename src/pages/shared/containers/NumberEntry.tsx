import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {connect} from 'react-redux';
import {RootState} from '../../../redux/rootReducer.tsx';
import {
  IComponentCommunicationAction,
  returnNumeric,
} from '../../../redux/componentCommunication/action/ComponentCommunicationAction.tsx';

function money_round(num: string) {
  if (!isNaN(parseInt(num))) {
    return Math.floor(Number(num) * 100) / 100;
  } else {
    return 0.0;
  }
}

interface NumberEntryProp {
  amount: number;
  returnNumeric: (
    IComponentCommunicationAction: IComponentCommunicationAction,
  ) => {};
}

function NumberEntry(props: NumberEntryProp) {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    containerWrapper: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#555B6E',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textEntryText: {color: '#BEE3DB', fontSize: 50, alignSelf: 'center'},
    textEntryInputField: {
      color: '#BEE3DB',
      fontSize: 45,
      textAlign: 'center',
    },
  });

  return (
    <View style={styles.containerWrapper}>
      <Text style={styles.textEntryText}>Amount</Text>
      <View>
        <TextInput
          defaultValue={String(props.amount === 0.0 ? '' : props.amount)}
          pointerEvents={'none'}
          placeholder={'0.00'}
          selectTextOnFocus={true}
          autoFocus={true}
          onSubmitEditing={event => {
            const returnNumericParameter: IComponentCommunicationAction = {
              from: '',
              id: '',
              index: 0,
              to: '',
              date: 0,
              itemSelected: '',
              payee: '',
              text: '',
              type: '',
              number: Number(event.nativeEvent.text),
              itemKey: '',
            };

            props.returnNumeric(returnNumericParameter);
            navigation.goBack();
          }}
          keyboardType={'numeric'}
          style={styles.textEntryInputField}
        />
      </View>
    </View>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    amount: state.communication.numeric,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    returnNumeric: (numeric: IComponentCommunicationAction) =>
      dispatch(returnNumeric(numeric)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NumberEntry);
