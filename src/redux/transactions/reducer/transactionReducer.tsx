import {
  ITransactionActionTypes,
  ITransactionStateType,
  TransactionActionTypes,
} from '../types/transactionTypes.tsx';

const initialState: ITransactionStateType = {
  transactions: [],
};

export function transactionReducer(
  state: ITransactionStateType = initialState,
  action: ITransactionActionTypes,
) {
  switch (action.type) {
    case TransactionActionTypes.ADD_TRANSACTION:
      let transactions = [...state.transactions];
      let foundIndex = transactions.findIndex(x => x.id == action.id);
      if (foundIndex === -1) {
        transactions.push({
          id: action.id,
          payee: action.payee,
          category: action.category,
          amount: action.amount,
          date: action.date,
          type: action.transactionType,
        });
      } else {
        transactions[foundIndex].payee = action.payee;
        transactions[foundIndex].category = action.category;
        transactions[foundIndex].amount = action.amount;
        transactions[foundIndex].date = action.date;
        transactions[foundIndex].type = action.transactionType;
      }
      return {
        ...state,
        transactions: transactions,
      };
    case TransactionActionTypes.DELETE_TRANSACTION:
      let transactionDeleteList = [...state.transactions];

      transactionDeleteList = transactionDeleteList.filter(
        value => value.id !== action.id,
      );
      return {
        ...state,
        transactions: transactionDeleteList,
      };

    default:
      return state;
  }
}
