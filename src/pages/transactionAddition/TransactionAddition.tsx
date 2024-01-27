import React, {RefObject, useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {
  clearData,
  IComponentCommunicationAction,
} from '../../redux/componentCommunication/action/ComponentCommunicationAction.tsx';
import {connect} from 'react-redux';
import {RootState} from '../../redux/rootReducer.tsx';

import RNDateTimePicker from '@react-native-community/datetimepicker';
import {addTransaction} from '../../redux/transactions/action/TransactionsActions.tsx';
import {
  ITransactionActionTypes,
  ITransactionStateType,
  TransactionActionTypes,
  TransactionTypes,
} from '../../redux/transactions/types/transactionTypes.tsx';
import {
  addBalance,
  addTransactionBalanceChange,
} from '../../redux/balance/actions/balanceActions.tsx';
import {
  BalanceActionTypes,
  IAddTransaction,
} from '../../redux/balance/types/balanceTypes.tsx';
import {
  categoryTransactionAction,
  categoryTransactionActionOutOfTime
} from '../../redux/category/action/CategoryAction.tsx';
import {
  CategoryActionTypes,
  ICategoryActionTypes,
  ICategoryItem,
  ICategoryTransactionAction,
} from '../../redux/category/types/CategoryTypes.tsx';
import {BottomSheetRefProps} from '../shared/components/bottomSheet.tsx';
import Icon from 'react-native-vector-icons/MaterialIcons';
import uuid from 'react-native-uuid';

import CategoryItem from '../shared/components/CategoryItem.tsx';
import Available from './component/Available.tsx';

interface TransactionAdditionProps {
  amount: number;
  date: number;
  categories: ICategoryItem;
  transactions: ITransactionStateType;
  itemSelect: string;
  itemKey: string;
  payee: string;
  addTransaction: (data: ITransactionActionTypes) => {};
  clearData: (data: IComponentCommunicationAction) => {};
  reduceAvailable: (data: IAddTransaction) => {};
  addBalance: (data: IAddTransaction) => {};
  categoryTransactionAction: (data: ICategoryTransactionAction) => {};
  categoryTransactionActionOutOfTime: (data: ICategoryTransactionAction) => {};
  bottomSheetRef: RefObject<BottomSheetRefProps>;
  modalVisible: boolean;
  setModalVisible: any;
  id: string;
}

function TransactionAddition(props: TransactionAdditionProps) {
  const navigation = useNavigation();
  const [datePicker, setDatePicker] = useState(false);
  const [dateValue, setDateValue] = useState(
    props.date !== 0 ? new Date(props.date) : new Date(),
  );

  let today = new Date();
  useEffect(() => {
    setDateValue(props.date !== 0 ? new Date(props.date) : new Date());
  }, [props.date]);
  const onChange = (event: any, selectedValue: any) => {
    setDatePicker(false);
    const currentDate = selectedValue || new Date();
    setDateValue(currentDate);
  };

  const monday: Date = new Date(
   today.getDate() - today.getDay() + 1
  );

  const sunday: Date = new Date(
   today.getDate() - today.getDay() + 7,
  );

  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      borderRadius: 25,
      marginBottom: 100,
      height: '100%',
      width: '100%',
      flexDirection: 'column',
      backgroundColor: '#E9EEEA',
      justifyContent: 'space-between',
    },
    bottomBarView: {
      height: 60,
      marginBottom: '5%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    dataEntryView: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: '60%',
      width: '100%',
    },
    buttonView: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: '20%',

      width: '100%',
      marginBottom: '30%',
    },
    buttonViewButton: {
      color: '#E9EEEA',
      backgroundColor: '#282828',
      borderRadius: 100,
    },
    amountDetailView: {
      width: '90%',

      flexDirection: 'row',
      height: 60,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 5,
    },
    dateSelectionView: {
      marginTop: 40,

      width: '90%',
      height: '10%',
    },
    dateTextView: {
      backgroundColor: '#282828',
      width: 90,
      height: 25,
      borderRadius: 5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    dateText: {color: '#E9EEEA', textAlign: 'center', fontSize: 15},
    dateSelectionItem: {width: '100%', display: 'flex', alignItems: 'flex-end'},
    payeeView: {
      borderRadius: 20,
      width: '100%',
      height: 60,
    },
    amountView: {
      height: 110,
      width: '90%',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
    },
    amountText: {width: '100%', textAlign: 'left', fontSize: 90},
    payeeText: {width: '90%', textAlign: 'right', fontSize: 40},
    categorySection: {
      height: 100,
      width: '90%',
      borderRadius: 30,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.dateSelectionView}>
        <TouchableOpacity
          onPress={() => {
            setDatePicker(true);
          }}
          style={styles.dateSelectionItem}>
          <View style={styles.dateTextView}>
            <Text style={styles.dateText}>
              {dateValue.toISOString().split('T')[0]}
            </Text>
          </View>

          {datePicker && (
            <RNDateTimePicker value={dateValue} onChange={onChange} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.dataEntryView}>
        <TouchableOpacity
          onPress={() => {
            // @ts-ignore
            navigation.navigate('NumberEntry');
          }}
          style={styles.amountView}>
          <Text style={styles.amountText}>
            {props.amount === 0 ? 'Amount' : props.amount}
          </Text>
        </TouchableOpacity>
        <View style={styles.payeeView}>
          <TouchableOpacity
            onPress={() => {
              // @ts-ignore
              navigation.navigate('TextEntry', {
                placeHolderText: 'Enter Payee Name',
                textInputName: 'Payee',
              });
            }}>
            <Text style={styles.payeeText}>
              {props.payee ? props.payee : 'Payee'}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {
            let list = Object.keys(props.categories).map(
              (categoryKey: string) => ({
                name: props.categories[categoryKey].name,
                id: categoryKey,
              }),
            );

            // @ts-ignore
            navigation.navigate('ListSelection', {
              list,
            });
          }}
          style={styles.categorySection}>
          {props.itemKey !== '0' && (
            <CategoryItem
              calculateAllocation={false}
              name={
                props.itemKey != '' ? props.categories[props.itemKey].name : ''
              }
              frequency={
                props.itemKey != ''
                  ? props.categories[props.itemKey].frequency
                  : ''
              }
              budget={
                props.itemKey != '' ? props.categories[props.itemKey].budget : 0
              }
              periodAvailable={
                props.itemKey != ''
                  ? props.categories[props.itemKey].periodAvailable
                  : 0
              }
              available={
                props.itemKey != ''
                  ? props.categories[props.itemKey].available
                  : 0
              }
              periodSpent={
                props.itemKey != ''
                  ? props.categories[props.itemKey].periodSpent
                  : 0
              }
              categoryIcon={
                props.itemKey != ''
                  ? props.categories[props.itemKey].icon
                  : 'home'
              }
            />
          )}

          {props.itemKey === '0' && <Available />}
        </TouchableOpacity>
      </View>
      <View style={styles.buttonView}>
        <Icon
          name="close"
          style={styles.buttonViewButton}
          onPress={() => {
            const clearDataParameters: IComponentCommunicationAction = {
              id: '',
              index: 0,
              from: '',
              to: '',
              date: 0,
              itemSelected: '',
              payee: '',
              text: '',
              type: '',
              number: 0.0,
              itemKey: '',
            };
            props.clearData(clearDataParameters);
            props.bottomSheetRef.current?.scrollTo(0);
          }}
          size={50}
        />

        <Icon
          name="done"
          style={styles.buttonViewButton}
          onPress={() => {
            if (
              props.amount !== 0 &&
              props.itemKey !== '' &&
              props.payee !== ''
            ) {
              const transactionData: ITransactionActionTypes = {
                id: props.id === '' ? uuid.v4().toString() : props.id,
                transactionType:
                  props.itemKey === '0'
                    ? TransactionTypes.CREDIT
                    : TransactionTypes.DEBIT,
                amount: props.amount,
                category: props.itemKey,
                date: dateValue.getTime(),
                payee: props.payee,
                type: TransactionActionTypes.ADD_TRANSACTION,
              };

              const clearDataParameters: IComponentCommunicationAction = {
                id: '',
                index: 0,
                from: '',
                to: '',
                date: 0,
                itemSelected: '',
                payee: '',
                text: '',
                type: '',
                number: 0.0,
                itemKey: '',
              };

              if (props.id === '') {
                const balanceData: IAddTransaction = {
                  type: BalanceActionTypes.REDUCE_BALANCE,
                  transactionAmount: props.amount,
                };

                //@ts-ignore
                const categoryData: ICategoryActionTypes = {
                  type: CategoryActionTypes.CATEGORY_TRANSACTION_ACTION,
                  categoryID: props.itemKey,
                  amount: props.amount,
                };
                if (props.itemKey === '0') {
                  props.addBalance(balanceData);
                } else {
                  props.reduceAvailable(balanceData);
                  if (
                      (props.categories[props.itemKey].frequency.toLowerCase() ===
                          'monthly' &&
                          dateValue.getTime() > firstDay.getTime() &&
                          dateValue.getTime() < lastDay.getTime()) ||
                      (props.categories[props.itemKey].frequency.toLowerCase() ===
                          'weekly' &&
                          dateValue.getTime() > monday.getTime() &&
                          dateValue.getTime() < sunday.getTime()) ||  (props.categories[props.itemKey].frequency.toLowerCase() ===
                          'daily' &&
                          dateValue.getTime() < new Date().setHours(23, 59, 59, 59)
                      )){
                    props.categoryTransactionAction(categoryData);
                  }else {
                    props.categoryTransactionActionOutOfTime(categoryData);
                  }
                }
              } else {
                const balanceData: IAddTransaction = {
                  type: BalanceActionTypes.REDUCE_BALANCE,
                  transactionAmount:
                    props.amount -
                    props.transactions.transactions[
                      props.transactions.transactions.findIndex(
                        x => x.id == props.id,
                      )
                    ].amount,
                };

                //@ts-ignore
                const categoryData: ICategoryActionTypes = {
                  type: CategoryActionTypes.CATEGORY_TRANSACTION_ACTION,
                  categoryID: props.itemKey,
                  amount:
                    props.amount -
                    props.transactions.transactions[
                      props.transactions.transactions.findIndex(
                        x => x.id == props.id,
                      )
                    ].amount,
                };
                if (props.itemKey === '0') {
                  props.addBalance(balanceData);
                } else {
                  props.reduceAvailable(balanceData);
                  if (
                      (props.categories[props.itemKey].frequency.toLowerCase() ===
                          'monthly' &&
                          dateValue.getTime() > firstDay.getTime() &&
                          dateValue.getTime() < lastDay.getTime()) ||
                      (props.categories[props.itemKey].frequency.toLowerCase() ===
                      'weekly' &&
                    dateValue.getTime() > monday.getTime() &&
                    dateValue.getTime() < sunday.getTime()) ||  (props.categories[props.itemKey].frequency.toLowerCase() ===
                          'daily' &&
                          dateValue.getTime() < new Date().setHours(23, 59, 59, 59)
                  )){
                    props.categoryTransactionAction(categoryData);
                  }else {
                    props.categoryTransactionActionOutOfTime(categoryData);
                }
              }

              props.addTransaction(transactionData);

              props.clearData(clearDataParameters);
              props.bottomSheetRef.current?.scrollTo(0);
            } else {
              props.setModalVisible(!props.modalVisible);
            }
          }}
          size={50}
        />
      </View>
    </View>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    amount: state.communication.numeric,
    categories: state.categories,
    itemSelect: state.communication.itemSelected,
    itemKey: state.communication.itemKey,
    payee: state.communication.text,
    id: state.communication.id,
    date: state.communication.date,
    transactions: state.transactions,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addTransaction: (data: ITransactionActionTypes) =>
      dispatch(addTransaction(data)),
    clearData: (data: IComponentCommunicationAction) =>
      dispatch(clearData(data)),
    reduceAvailable: (data: IAddTransaction) =>
      dispatch(addTransactionBalanceChange(data)),
    addBalance: (data: IAddTransaction) => dispatch(addBalance(data)),
    categoryTransactionAction: (data: ICategoryTransactionAction) =>
      dispatch(categoryTransactionAction(data)),
    categoryTransactionActionOutOfTime: (data: ICategoryTransactionAction) =>
        dispatch(categoryTransactionActionOutOfTime(data)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionAddition);
