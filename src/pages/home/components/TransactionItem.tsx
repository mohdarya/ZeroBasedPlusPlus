import React from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    Touchable,
    TouchableOpacity,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    ITransactionActionTypes,
    TransactionTypes
} from '../../../redux/transactions/types/transactionTypes';
import {
    clearData,
    IComponentCommunicationAction, returnDate, returnID, returnItemKey, returnItemSelected, returnNumeric, returnText
} from '../../../redux/componentCommunication/action/ComponentCommunicationAction';
import {RootState} from "../../../redux/rootReducer.tsx";
import {addTransaction} from "../../../redux/transactions/action/TransactionsActions.tsx";
import {IAddTransaction} from "../../../redux/balance/types/balanceTypes.tsx";
import {addBalance, addTransactionBalanceChange} from "../../../redux/balance/actions/balanceActions.tsx";
import {ICategoryTransactionAction} from "../../../redux/category/types/CategoryTypes.tsx";
import {categoryTransactionAction} from "../../../redux/category/action/CategoryAction.tsx";
import {connect} from "react-redux";


const { height: SCREEN_HEIGHT } = Dimensions.get('window');


function TransactionItem(props: any) {
  const Styles = StyleSheet.create({
    container: {
      height: 60,
      width: '100%',
      display: 'flex',

      flexDirection: 'row',

      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <TouchableOpacity onPress={()=> {

      const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;

      const transactionData: IComponentCommunicationAction = {
        index: 0,
        from: "",
        to: "",
        date: props.dateTime,
        id: props.id,
        itemSelected: props.categoryId,
        payee: props.name,
        text: props.name,
        type: "",
        number: props.amount,
        itemKey: props.categoryId
      };

      props.returnItemKey(transactionData);
      props.returnItemSelected(transactionData);
      props.returnNumeric(transactionData)
      props.returnText(transactionData)
      props.returnDate(transactionData)
      props.returnId(transactionData)
      props.transactionEditingRef.current?.scrollTo( MAX_TRANSLATE_Y)
    }} style={Styles.container}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
      />
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          width: '90%',
        }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
            width: '70%',
          }}>
          <View>
            <Icon
              name={props.categoryIcon}
              size={25}
              style={props.type === TransactionTypes.DEBIT ? {
                backgroundColor: '#FF7171',
                borderRadius: 100,
                padding: 6,
                color: '#282828',
              } : {
                backgroundColor: '#71FFAA',
                borderRadius: 100,
                padding: 6,
                color: '#282828',
              } }
            />
          </View>
          <View style={{marginLeft: 10}}>
            <Text style={{color: '#555B6E', fontSize: 20, margin: 0}}>
              {props.name}
            </Text>
            <Text style={{color: '#555B6E', fontSize: 20, margin: 0}}>
              {props.date}
            </Text>
          </View>
        </View>

        <View>
          <Text style={{color: '#555B6E', fontSize: 20, margin: 0}}>
            {props.amount}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const mapStateToProps = (state: RootState, ownProps: any) => {
    return {

    };
};


const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        returnItemSelected: (item: IComponentCommunicationAction) => dispatch(returnItemSelected(item)),
        returnItemKey: (item: IComponentCommunicationAction) => dispatch(returnItemKey(item)),
        returnNumeric: (numeric: IComponentCommunicationAction) => dispatch(returnNumeric(numeric)),
        returnText: (numeric: IComponentCommunicationAction) => dispatch(returnText(numeric)),
        returnDate: (numeric: IComponentCommunicationAction) => dispatch(returnDate(numeric)),
        returnId: (numeric: IComponentCommunicationAction) => dispatch(returnID(numeric)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TransactionItem);
