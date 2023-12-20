import {ITransactionActionTypes, TransactionActionTypes} from "../types/transactionTypes.tsx";

const initialState = {
  transactions: [
    {
      name: 'test',
      category: '261d9e85-4a69-446e-aef6-3ce9df240190',
      amount: '200',
    },
    {
      name: 'test',
      category: '7f405121-adf5-4479-a3cb-f97b85a514e9',
      amount: '300',
    },
    {
      name: 'test',
      category: 'a15339ab-4d99-4d63-ad58-26e57379beb5',
      amount: '400',
    },
  ],
};


export function transactionReducer(state = initialState, action : ITransactionActionTypes) {
  switch (action.type) {
    case TransactionActionTypes.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [
          ...state.transactions,
          {
            name: action.payee,
            category: action.category,
            amount: action.amount,
            date: action.date,
          },
        ],
      };
    default:
      return state;
  }
}
