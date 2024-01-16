import {
  IAddTransaction,
  IDeleteTransaction,
  ITransactionActionTypes,
  TransactionActionTypes,
} from '../types/transactionTypes.tsx';

export function addTransaction(payload: IAddTransaction) {
  return {
    type: TransactionActionTypes.ADD_TRANSACTION,
    payee: payload.payee,
    amount: payload.amount,
    date: payload.date,
    category: payload.category,
    transactionType: payload.transactionType,
    id: payload.id,
  };
}

export function deleteTransaction(payload: IDeleteTransaction) {
  return {
    type: TransactionActionTypes.DELETE_TRANSACTION,
    id: payload.id,
  };
}
