import React, {RefObject, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  IDeleteTransaction,
  TransactionActionTypes,
  TransactionTypes,
} from '../../../redux/transactions/types/transactionTypes.tsx';
import {
  CategoryActionTypes,
  ICategoryItem,
  ICategoryTransactionAction,
} from '../../../redux/category/types/CategoryTypes.tsx';
import {ITransactionStateType} from '../../../redux/transactions/reducer/transactionReducer.tsx';
import {
  clearData,
  IComponentCommunicationAction,
} from '../../../redux/componentCommunication/action/ComponentCommunicationAction.tsx';
import {
  BalanceActionTypes,
  IAddTransaction,
} from '../../../redux/balance/types/balanceTypes.tsx';
import {BottomSheetRefProps} from './bottomSheet.tsx';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {deleteTransaction} from '../../../redux/transactions/action/TransactionsActions.tsx';
import {
  addBalance,
  addTransactionBalanceChange,
} from '../../../redux/balance/actions/balanceActions.tsx';
import {categoryTransactionAction} from '../../../redux/category/action/CategoryAction.tsx';
import {connect} from 'react-redux';
import {RootState} from '../../../redux/rootReducer.tsx';
import CategoryCreationPage from '../../categorycreation/CategoryCreationPage.tsx';

interface ITransactionEditProp {
  deleteTransaction: (data: IDeleteTransaction) => {};

  categories: ICategoryItem;
  available: number;

  transactions: ITransactionStateType;

  clearData: (data: IComponentCommunicationAction) => {};
  reduceAvailable: (data: IAddTransaction) => {};
  addBalance: (data: IAddTransaction) => {};
  categoryTransactionAction: (data: ICategoryTransactionAction) => {};

  categoryEditingRef: RefObject<BottomSheetRefProps>;
  id: string;
  itemKey: string;
  amount: number;
}
function TransactionEdit(props: ITransactionEditProp) {
  const [modalVisible, setModalVisible] = useState(false);
  const styles = StyleSheet.create({
    containerWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {height: '90%', width: '95%'},
  });

  return (
    <View style={styles.containerWrapper}>
      <View style={styles.container}>
        <CategoryCreationPage
          bottomSheetRef={props.categoryEditingRef}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
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
    text: state.communication.text,
    frequency: state.appDetail.categoryFrequency,
    categoryIcons: state.appDetail.categoryIconList,
    categoryFrequency: state.appDetail.categoryFrequency,
    index: state.communication.index,
  };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
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
