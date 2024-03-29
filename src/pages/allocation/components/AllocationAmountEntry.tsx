import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/core';
import {RootState} from '../../../redux/rootReducer.tsx';
import {connect} from 'react-redux';
import {
  clearData,
  IComponentCommunicationAction,
  returnNumeric,
} from '../../../redux/componentCommunication/action/ComponentCommunicationAction.tsx';
import {allocateMoney} from '../../../redux/balance/actions/balanceActions.tsx';
import {
  BalanceActionTypes,
  IAllocateMoney,
} from '../../../redux/balance/types/balanceTypes.tsx';
import {allocateMoneyToCategoryAction} from '../../../redux/category/action/CategoryAction.tsx';
import {
  CategoryActionTypes,
  IAllocateMoneyToCategory,
} from '../../../redux/category/types/CategoryTypes.tsx';

interface TransactionAdditionProps {
  amount: number;
  itemSelect: string;
  itemKey: string;
  payee: string;
  returnNumeric: (
    IComponentCommunicationAction: IComponentCommunicationAction,
  ) => {};
  clearData: (data: IComponentCommunicationAction) => {};
  allocateMoney: (data: IAllocateMoney) => {};
  allocateMoneyToCategoryAction: (data: IAllocateMoneyToCategory) => {};
}

function AllocationAmountEntry(props: TransactionAdditionProps) {
  const navigation = useNavigation();
  const route = useRoute();
  const [allocationAction, setAllocationAction] = useState('add');
  // @ts-ignore
  const categoryID = route.params.categoryID;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      borderRadius: 25,
      height: '100%',
      width: '100%',
      flexDirection: 'column',
      backgroundColor: '#E9EEEA',
      justifyContent: 'space-between',
    },
    textEntryView: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: 150,
      width: '100%',
    },
    allocationActionView: {
      marginTop: 40,
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: '100%',

      flexDirection: 'row',
      height: '10%',
    },

    allocationActionActive: {
      backgroundColor: '#282828',
      color: '#B1BBAE',
    },
    allocationActionInActive: {
      backgroundColor: '#CFE1CB',
      width: 90,
      height: 25,
      margin: 10,
      borderRadius: 5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    allocationElementText: {
      color: '#282828',
      textAlign: 'center',
      fontSize: 15,
    },
    textEntry: {
      color: '#282828',
      fontSize: 96,
      width: '100%',
      textAlign: 'left',
    },
  });

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          height: '100%',
        }}>
        <View style={styles.allocationActionView}>
          <TouchableOpacity
            onPress={() => {
              setAllocationAction('deduct');
            }}>
            <View
              style={[
                styles.allocationActionInActive,
                allocationAction === 'deduct'
                  ? styles.allocationActionActive
                  : null,
              ]}>
              <Text
                style={[
                  styles.allocationElementText,
                  allocationAction === 'deduct'
                    ? styles.allocationActionActive
                    : null,
                ]}>
                Deduct
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setAllocationAction('add');
            }}>
            <View
              style={[
                styles.allocationActionInActive,
                allocationAction === 'add'
                  ? styles.allocationActionActive
                  : null,
              ]}>
              <Text
                style={[
                  styles.allocationElementText,
                  allocationAction === 'add'
                    ? styles.allocationActionActive
                    : null,
                ]}>
                Add
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.textEntryView}>
          <TextInput
            defaultValue={String(props.amount === 0.0 ? '' : props.amount)}
            pointerEvents={'none'}
            placeholder={'0.00'}
            selectTextOnFocus={true}
            autoFocus={true}
            onEndEditing={event => {
              const clearDataParameters: IComponentCommunicationAction = {
                date: '',
                itemSelected: '',
                payee: '',
                text: '',
                type: '',
                number: 0.0,
                itemKey: '',
              };
              let amount: number = props.amount;
              if (allocationAction === 'deduct') {
                amount = 0 - amount;
              }
              const allocateMoneyParameters: IAllocateMoney = {
                type: BalanceActionTypes.ALLOCATE_MONEY,
                allocationAmount: amount,
              };
              const allocateMoneyToCategoryParameters: IAllocateMoneyToCategory =
                {
                  amount: amount,
                  categoryID: categoryID,
                  type: CategoryActionTypes.ALLOCATE_MONEY_TO_CATEGORY,
                };

              props.clearData(clearDataParameters);

              props.allocateMoney(allocateMoneyParameters);
              props.allocateMoneyToCategoryAction(
                allocateMoneyToCategoryParameters,
              );
              navigation.goBack();
            }}
            onChangeText={text => {
              const returnNumericParameter: IComponentCommunicationAction = {
                date: '',
                itemSelected: '',
                payee: '',
                text: '',
                type: '',
                number: Number(text),
                itemKey: '',
              };

              props.returnNumeric(returnNumericParameter);
            }}
            keyboardType={'numeric'}
            style={styles.textEntry}
          />
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
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    returnNumeric: (numeric: IComponentCommunicationAction) =>
      dispatch(returnNumeric(numeric)),
    clearData: (data: IComponentCommunicationAction) =>
      dispatch(clearData(data)),
    allocateMoney: (data: IAllocateMoney) => dispatch(allocateMoney(data)),
    allocateMoneyToCategoryAction: (data: IAllocateMoneyToCategory) =>
      dispatch(allocateMoneyToCategoryAction(data)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllocationAmountEntry);
