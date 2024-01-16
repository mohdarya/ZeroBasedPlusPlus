import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
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
import Icon from 'react-native-vector-icons/MaterialIcons';

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
}

function IconSelectionItem(props: ListSelectionItemProp) {
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    containerWrapper: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#B1BBAE',
      justifyContent: 'flex-start',
    },
    container: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignContent: 'space-between',
      margin: 10,
    },
    iconViewWrapper: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconView: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      width: '90%',
      borderRadius: 15,
    },
    icon: {
      backgroundColor: '#282828',
      borderRadius: 100,
      padding: 5,
      color: '#E9EEEA',
    },
    iconWrapper: {
      color: '#BEE3DB',
      alignSelf: 'center',
    },
  });

  return (
    <View style={styles.containerWrapper}>
      <View style={styles.container}>
        <View style={styles.iconViewWrapper}>
          <View style={styles.iconView}>
            <TouchableOpacity
              onPress={() => {
                const returnParameter: IComponentCommunicationAction = {
                  from: '',
                  to: '',
                  date: '',
                  itemSelected: props.value,
                  payee: '',
                  text: '',
                  type: '',
                  number: 0.0,
                  itemKey: '',
                };

                props.returnItemKey(returnParameter);
                props.returnItemSelected(returnParameter);

                navigation.goBack();
              }}
              // @ts-ignore
              style={styles.iconWrapper}>
              <Icon name={props.value} size={30} style={styles.icon} />
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
export default connect(null, mapDispatchToProps)(IconSelectionItem);
