import React from 'react';
import {KeyboardTypeOptions, StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/core';
import {connect} from 'react-redux';
import {
  IComponentCommunicationAction,
  returnText
} from '../../../redux/componentCommunication/action/ComponentCommunicationAction';
import {RootState} from "../../../redux/rootReducer.tsx";


interface  TextEntryProps{

  text: string,
  returnText: (IComponentCommunicationAction: IComponentCommunicationAction) => {},
}

function TextEntry(props: TextEntryProps) {
  const navigation = useNavigation();
  const route = useRoute();
// @ts-ignore
  const placeHolderText = route.params.placeHolderText;
  // @ts-ignore
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


const textInputProps : KeyboardTypeOptions = "default"


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
                onChangeText={(text: string) => {

                  const returnTextParameter: IComponentCommunicationAction = {
                    date: "",
                    itemSelected: "",
                    payee: "",
                    text: text,
                    type: "",
                    number:0.0,
                    itemKey: ""
                  };
                  props.returnText(returnTextParameter);
                }}
              keyboardType={textInputProps}
                style={{
                  // @ts-ignore
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


const mapStateToProps = (state: RootState, ownProps: any) => {
  return {
    text: state.communication.text,
  };
};
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    returnText: (numeric: IComponentCommunicationAction) => dispatch(returnText(numeric)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TextEntry);
