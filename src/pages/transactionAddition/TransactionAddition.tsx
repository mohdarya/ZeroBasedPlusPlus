import React, {RefObject, useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {
  clearData,
  IComponentCommunicationAction,
} from '../../redux/componentCommunication/action/ComponentCommunicationAction.tsx';
import {connect} from 'react-redux';
import {RootState} from '../../redux/rootReducer.tsx';
import {ICategoryItem} from '../../redux/category/reducer/CategoryReducer.tsx';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {addTransaction} from '../../redux/transactions/action/TransactionsActions.tsx';
import {
  ITransactionActionTypes,
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
import {categoryTransactionAction} from '../../redux/category/action/CategoryAction.tsx';
import {
  CategoryActionTypes,
  ICategoryActionTypes,
  ICategoryTransactionAction,
} from '../../redux/category/types/CategoryTypes.tsx';
import {BottomSheetRefProps} from '../shared/components/bottomSheet.tsx';
import Icon from 'react-native-vector-icons/MaterialIcons';
import uuid from 'react-native-uuid';
import {ITransactionStateType} from '../../redux/transactions/reducer/transactionReducer.tsx';
import CategoryItem from '../shared/components/CategoryItem.tsx';

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

  useEffect(() => {
    setDateValue(props.date !== 0 ? new Date(props.date) : new Date());
  }, [props.date]);
  const onChange = (event: any, selectedValue: any) => {
    setDatePicker(false);
    const currentDate = selectedValue || new Date();
    setDateValue(currentDate);
  };
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
    spendingInfoView: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: '60%',
      width: '100%',
    },
    transactionListView: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '20%',
      width: '100%',
      marginBottom: '30%',
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
    amountView: {
      marginTop: 40,

      width: '90%',
      height: '10%',
    },
    frequencyView: {
      borderRadius: 20,
      width: '100%',
      height: 60,
    },
  });

  return (
    <View style={styles.container}>
      <View style={{width: '100%', height: '100%'}}>
        <View style={styles.amountView}>
          <TouchableOpacity
            onPress={() => {
              setDatePicker(true);
            }}
            style={{width: '100%', display: 'flex'}}>
            <View
              style={{display: 'flex', width: '100%', alignItems: 'flex-end'}}>
              <View
                style={{
                  backgroundColor: '#282828',
                  width: 90,
                  height: 25,
                  borderRadius: 5,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{color: '#E9EEEA', textAlign: 'center', fontSize: 15}}>
                  {dateValue.toISOString().split('T')[0]}
                </Text>
              </View>
            </View>

            {datePicker && (
              <RNDateTimePicker value={dateValue} onChange={onChange} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.spendingInfoView}>
          <TouchableOpacity
            onPress={() => {
              // @ts-ignore
              navigation.navigate('NumberEntry');
            }}
            style={{
              height: 110,
              width: '90%',
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-start',
            }}>
            <Text style={{width: '100%', textAlign: 'left', fontSize: 20}}>
              AED
            </Text>
            <Text style={{width: '100%', textAlign: 'left', fontSize: 90}}>
              {props.amount === 0 ? 'Amount' : props.amount}
            </Text>
          </TouchableOpacity>
          <View style={styles.frequencyView}>
            <TouchableOpacity
              onPress={() => {
                // @ts-ignore
                navigation.navigate('TextEntry', {
                  placeHolderText: 'Enter Payee Name',
                  textInputName: 'Payee',
                });
              }}
              style={{width: '100%', display: 'flex'}}>
              <Text style={{width: '90%', textAlign: 'right', fontSize: 40}}>
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
            style={{
              height: 100,
              width: '90%',
              borderRadius: 30,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <View style={{width: '90%'}}>
              {props.itemKey !== '0' && (
                <CategoryItem
                  calculateAllocation={false}
                  name={
                    props.itemKey != ''
                      ? props.categories[props.itemKey].name
                      : ''
                  }
                  frequency={
                    props.itemKey != ''
                      ? props.categories[props.itemKey].frequency
                      : ''
                  }
                  budget={
                    props.itemKey != ''
                      ? props.categories[props.itemKey].budget
                      : ''
                  }
                  periodAvailable={
                    props.itemKey != ''
                      ? props.categories[props.itemKey].periodAvailable
                      : ''
                  }
                  available={
                    props.itemKey != ''
                      ? props.categories[props.itemKey].available
                      : ''
                  }
                  periodSpent={
                    props.itemKey != ''
                      ? props.categories[props.itemKey].periodSpent
                      : ''
                  }
                  categoryIcon={
                    props.itemKey != ''
                      ? props.categories[props.itemKey].icon
                      : ''
                  }
                />
              )}

              {props.itemKey === '0' && (
                <View
                  style={{
                    height: 60,
                    width: '100%',
                    display: 'flex',

                    flexDirection: 'row',

                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexDirection: 'row',
                      width: '100%',
                      height: 50,
                      borderRadius: 20,
                      backgroundColor: '#71FFAA',
                    }}>
                    <View
                      style={{
                        marginLeft: 10,
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flexDirection: 'row',
                        width: '60%',
                      }}>
                      <View>
                        <Icon
                          name="attach-money"
                          size={25}
                          style={{
                            borderRadius: 100,
                            padding: 5,
                            color: '#282828',
                          }}
                        />
                      </View>
                      <View>
                        <Text
                          style={{
                            color: '#555B6E',
                            fontSize: 15,
                            marginLeft: 5,
                            fontWeight: 'bold',
                          }}>
                          Available
                        </Text>
                      </View>
                    </View>

                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',

                        justifyContent: 'flex-start',
                        width: '25%',
                      }}
                    />
                  </View>
                </View>
              )}
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.transactionListView}>
          <View
            style={{
              width: '100%',

              flexDirection: 'row',
              height: 100,
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <Icon
              name="close"
              style={{
                color: '#E9EEEA',
                backgroundColor: '#282828',
                borderRadius: 100,
              }}
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
              style={{
                color: '#E9EEEA',
                backgroundColor: '#282828',
                borderRadius: 100,
              }}
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
                      props.categoryTransactionAction(categoryData);
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
                      props.categoryTransactionAction(categoryData);
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
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionAddition);
