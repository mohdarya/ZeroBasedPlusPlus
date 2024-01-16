import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {connect} from 'react-redux';
import {
  IComponentCommunicationAction,
  IReturnFrom,
  IReturnTo,
  returnFrom,
  returnItemKey,
  returnItemSelected,
  returnTo,
} from '../../../redux/componentCommunication/action/ComponentCommunicationAction';

interface ListSelectionItemProp {
  key: string;
  value: string;
  id: string;
  returnItemSelected: (
    IComponentCommunicationAction: IComponentCommunicationAction,
  ) => {};
  returnItemKey: (
    IComponentCommunicationAction: IComponentCommunicationAction,
  ) => {};
  returnFrom: (IComponentCommunicationAction: IReturnFrom) => {};
  returnTo: (IComponentCommunicationAction: IReturnTo) => {};
  stateVariable: string;
}

function ListSelectionItem(props: ListSelectionItemProp) {
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
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
              backgroundColor: '#B1BBAE',
              width: '90%',
              borderRadius: 15,
            }}>
            <TouchableOpacity
              onPress={() => {
                if (props.stateVariable === 'from') {
                  const returnFrom: IReturnFrom = {
                    from: props.id,
                    type: '',
                  };
                  props.returnFrom(returnFrom);
                } else if (props.stateVariable === 'to') {
                  const returnTo: IReturnTo = {
                    to: props.id,
                    type: '',
                  };
                  props.returnTo(returnTo);
                } else {
                  const returnParameter: IComponentCommunicationAction = {
                    from: '',
                    to: '',
                    date: '',
                    itemSelected: props.value,
                    payee: '',
                    text: '',
                    type: '',
                    number: 0.0,
                    itemKey: props.id,
                  };

                  props.returnItemKey(returnParameter);
                  props.returnItemSelected(returnParameter);
                }

                navigation.goBack();
              }}
              // @ts-ignore
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

const mapDispatchToProps = (dispatch: any) => {
  return {
    returnItemSelected: (item: IComponentCommunicationAction) =>
      dispatch(returnItemSelected(item)),
    returnItemKey: (item: IComponentCommunicationAction) =>
      dispatch(returnItemKey(item)),
    returnFrom: (item: IReturnFrom) => dispatch(returnFrom(item)),
    returnTo: (item: IReturnTo) => dispatch(returnTo(item)),
  };
};
export default connect(null, mapDispatchToProps)(ListSelectionItem);
