import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TransactionTypes} from '../../../redux/transactions/types/transactionTypes.tsx';
import {
  IComponentCommunicationAction,
  returnDate,
  returnID,
  returnItemKey,
  returnItemSelected,
  returnNumeric,
  returnText,
} from '../../../redux/componentCommunication/action/ComponentCommunicationAction.tsx';
import {connect} from 'react-redux';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

function TransactionItem(props: any) {
  const Styles = StyleSheet.create({
    containerWrapper: {
      height: 60,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    itemText: {color: '#555B6E', fontSize: 20, margin: 0},
    debitStyle: {
      backgroundColor: '#FF7171',
      borderRadius: 100,
      padding: 6,
      color: '#282828',
    },
    creditStyle: {
      backgroundColor: '#71FFAA',
      borderRadius: 100,
      padding: 6,
      color: '#282828',
    },
    itemView: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      width: '90%',
    },
    transactionDetailView: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row',
      width: '70%',
    },
  });

  return (
    <TouchableOpacity
      onPress={() => {
        const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;

        const transactionData: IComponentCommunicationAction = {
          index: 0,
          from: '',
          to: '',
          date: props.dateTime,
          id: props.id,
          itemSelected: props.categoryId,
          payee: props.name,
          text: props.name,
          type: '',
          number: props.amount,
          itemKey: props.categoryId,
        };

        props.returnItemKey(transactionData);
        props.returnItemSelected(transactionData);
        props.returnNumeric(transactionData);
        props.returnText(transactionData);
        props.returnDate(transactionData);
        props.returnId(transactionData);
        props.transactionEditingRef.current?.scrollTo(MAX_TRANSLATE_Y);
      }}
      style={Styles.containerWrapper}>
      <View style={Styles.itemView}>
        <View style={Styles.transactionDetailView}>
          <View>
            <Icon
              name={props.categoryIcon}
              size={25}
              style={
                props.type === TransactionTypes.DEBIT
                  ? Styles.debitStyle
                  : Styles.creditStyle
              }
            />
          </View>
          <View style={{marginLeft: 10}}>
            <Text style={Styles.itemText}>{props.name}</Text>
            <Text style={Styles.itemText}>{props.date}</Text>
          </View>
        </View>

        <View>
          <Text style={Styles.itemText}>{props.amount}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    returnItemSelected: (item: IComponentCommunicationAction) =>
      dispatch(returnItemSelected(item)),
    returnItemKey: (item: IComponentCommunicationAction) =>
      dispatch(returnItemKey(item)),
    returnNumeric: (numeric: IComponentCommunicationAction) =>
      dispatch(returnNumeric(numeric)),
    returnText: (numeric: IComponentCommunicationAction) =>
      dispatch(returnText(numeric)),
    returnDate: (numeric: IComponentCommunicationAction) =>
      dispatch(returnDate(numeric)),
    returnId: (numeric: IComponentCommunicationAction) =>
      dispatch(returnID(numeric)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TransactionItem);
