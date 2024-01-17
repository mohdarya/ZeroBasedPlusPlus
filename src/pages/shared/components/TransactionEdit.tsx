import React, {RefObject} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  IDeleteTransaction,
  ITransactionStateType,
  TransactionActionTypes,
  TransactionTypes,
} from '../../../redux/transactions/types/transactionTypes.tsx';
import {
  CategoryActionTypes,
  ICategoryItem,
  ICategoryTransactionAction,
} from '../../../redux/category/types/CategoryTypes.tsx';
import {
  clearData,
  IComponentCommunicationAction,
} from '../../../redux/componentCommunication/action/ComponentCommunicationAction.tsx';
import {
  BalanceActionTypes,
  IAddTransaction,
} from '../../../redux/balance/types/balanceTypes.tsx';
import {BottomSheetRefProps} from './bottomSheet.tsx';
import TransactionAddition from '../../transactionAddition/TransactionAddition.tsx';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {deleteTransaction} from '../../../redux/transactions/action/TransactionsActions.tsx';
import {
  addBalance,
  addTransactionBalanceChange,
} from '../../../redux/balance/actions/balanceActions.tsx';
import {categoryTransactionAction} from '../../../redux/category/action/CategoryAction.tsx';
import {connect} from 'react-redux';
import {RootState} from '../../../redux/rootReducer.tsx';

interface ITransactionEditProp {
  deleteTransaction: (data: IDeleteTransaction) => {};
  categories: ICategoryItem;
  available: number;
  transactions: ITransactionStateType;
  clearData: (data: IComponentCommunicationAction) => {};
  reduceAvailable: (data: IAddTransaction) => {};
  addBalance: (data: IAddTransaction) => {};
  categoryTransactionAction: (data: ICategoryTransactionAction) => {};
  transactionEditingRef: RefObject<BottomSheetRefProps>;
  id: string;
  itemKey: string;
  amount: number;
}
function TransactionEdit(props: ITransactionEditProp) {
  const styles = StyleSheet.create({
    containerWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    graphView: {
      width: '100%',
      height: '35%',
    },
    spendingLimitBarView: {
      width: '100%',
      height: 176,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    transactionSectionView: {
      width: '100%',
      height: '40%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    transactionSectionWrapper: {height: '90%', width: '90%'},
    deleteButtonView: {
      height: 50,
      width: '95%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      marginBottom: 10,
    },
    deleteButtonIcon: {
      color: '#E9EEEA',
      backgroundColor: '#282828',
      borderRadius: 100,
      padding: 5,
    },
  });

  return (
    <View style={styles.containerWrapper}>
      <View style={styles.transactionSectionWrapper}>
        <TransactionAddition bottomSheetRef={props.transactionEditingRef} />
        <View style={styles.deleteButtonView}>
          <View style={{height: 50, width: 50}}>
            <Icon
              name="delete"
              style={styles.deleteButtonIcon}
              onPress={() => {
                const deleteTransactionParameter: IDeleteTransaction = {
                  id: props.id,
                  type: TransactionActionTypes.DELETE_TRANSACTION,
                };

                const balanceData: IAddTransaction = {
                  type: BalanceActionTypes.REDUCE_BALANCE,
                  transactionAmount:
                    0 -
                    props.transactions.transactions[
                      props.transactions.transactions.findIndex(
                        x => x.id == props.id,
                      )
                    ].amount,
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

                //@ts-ignore
                const categoryData: ICategoryActionTypes = {
                  type: CategoryActionTypes.CATEGORY_TRANSACTION_ACTION,
                  categoryID: props.itemKey,
                  amount:
                    0 -
                    props.transactions.transactions[
                      props.transactions.transactions.findIndex(
                        x => x.id == props.id,
                      )
                    ].amount,
                };
                if (
                  props.transactions.transactions[
                    props.transactions.transactions.findIndex(
                      x => x.id == props.id,
                    )
                  ].type === TransactionTypes.CREDIT
                ) {
                  props.addBalance(balanceData);
                } else {
                  props.reduceAvailable(balanceData);
                  props.categoryTransactionAction(categoryData);
                }
                props.deleteTransaction(deleteTransactionParameter);
                props.clearData(clearDataParameters);
                props.transactionEditingRef.current?.scrollTo(0);
              }}
              size={40}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    transactions: state.transactions,
    amount: state.communication.numeric,
    categories: state.categories,
    itemSelect: state.communication.itemSelected,
    itemKey: state.communication.itemKey,
    from: state.communication.from,
    to: state.communication.to,
    date: state.communication.date,
    id: state.communication.id,
    statistics: state.statistics,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    deleteTransaction: (data: IDeleteTransaction) =>
      dispatch(deleteTransaction(data)),
    clearData: (data: IComponentCommunicationAction) =>
      dispatch(clearData(data)),
    reduceAvailable: (data: IAddTransaction) =>
      dispatch(addTransactionBalanceChange(data)),
    addBalance: (data: IAddTransaction) => dispatch(addBalance(data)),
    categoryTransactionAction: (data: ICategoryTransactionAction) =>
      dispatch(categoryTransactionAction(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TransactionEdit);
