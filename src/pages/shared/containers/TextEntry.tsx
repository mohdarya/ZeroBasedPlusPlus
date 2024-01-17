import React from 'react';
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/core';
import {connect} from 'react-redux';
import {
  IComponentCommunicationAction,
  returnText,
} from '../../../redux/componentCommunication/action/ComponentCommunicationAction';
import {RootState} from '../../../redux/rootReducer.tsx';

interface TextEntryProps {
  text: string;
  returnText: (
    IComponentCommunicationAction: IComponentCommunicationAction,
  ) => {};
}

function TextEntry(props: TextEntryProps) {
  const navigation = useNavigation();
  const route = useRoute();
  // @ts-ignore
  const placeHolderText = route.params.placeHolderText;
  // @ts-ignore
  const textInputName = route.params.textInputName;
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
      fontSize: 35,
      textAlign: 'center',
    },
  });

  const textInputProps: KeyboardTypeOptions = 'default';

  return (
    <View style={styles.containerWrapper}>
      <Text style={styles.textEntryText}>{textInputName}</Text>
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
          onChangeText={(text: string) => {
            const returnTextParameter: IComponentCommunicationAction = {
              date: '',
              itemSelected: '',
              payee: '',
              text: text,
              type: '',
              number: 0.0,
              itemKey: '',
            };
            props.returnText(returnTextParameter);
          }}
          keyboardType={textInputProps}
          style={styles.textEntryInputField}
        />
      </View>
    </View>
  );
}

const mapStateToProps = (state: RootState, ownProps: any) => {
  return {
    text: state.communication.text,
  };
};
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    returnText: (numeric: IComponentCommunicationAction) =>
      dispatch(returnText(numeric)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TextEntry);
