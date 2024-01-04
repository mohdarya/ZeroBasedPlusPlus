import {ITransactionActionTypes, TransactionActionTypes} from "../types/transactionTypes.tsx";


export function addTransaction(payload : ITransactionActionTypes) {
  return {
    type: TransactionActionTypes.ADD_TRANSACTION,
    payee : payload.payee,
    amount : payload.amount,
    date : payload.date,
    category : payload.category,
    transactionType : payload.transactionType
  };
}


