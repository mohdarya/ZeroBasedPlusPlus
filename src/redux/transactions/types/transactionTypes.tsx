export enum TransactionActionTypes {
  ADD_TRANSACTION = 'ADD_TRANSACTION',
  DELETE_TRANSACTION = 'DELETE_TRANSACTION',
}

export enum TransactionTypes {
  DEBIT = 'DEBIT',
  CREDIT = 'CREDIT',
}

export interface IAddTransaction {
  type: TransactionActionTypes;
  payee: string;
  amount: number;
  date: number;
  category: string;
  id: string;
  transactionType: TransactionTypes;
}

export interface IDeleteTransaction {
  type: TransactionActionTypes;
  id: string;
}

export type ITransactionActionTypes = IDeleteTransaction & IAddTransaction;
